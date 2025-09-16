#!/usr/bin/env node

const { execSync } = require("child_process");

function runCommand(cmd) {
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch (err) {
    console.error(`❌ Error running: ${cmd}`);
    process.exit(1);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Usage: quick-commit <type?> <message>");
    console.log("Examples:");
    console.log('  quick-commit "fix login bug"');
    console.log('  quick-commit feat "add dark mode"');
    process.exit(1);
  }

  let type = "";
  let message = "";

  if (args.length === 1) {
    message = args[0];
  } else {
    type = args[0];
    message = args[1];
  }

  // Emoji mapping
  const emojiMap = {
    feat: "✨ feat:",
    fix: "🐛 fix:",
    docs: "📝 docs:",
    style: "🎨 style:",
    refactor: "♻️ refactor:",
    chore: "🔧 chore:",
    test: "✅ test:",
  };

  const prefix = emojiMap[type] || "";
  const commitMsg = prefix ? `${prefix} ${message}` : message;

  console.log(`📦 Staging changes...`);
  runCommand("git add .");

  console.log(`💬 Committing: "${commitMsg}"`);
  runCommand(`git commit -m "${commitMsg}"`);

  console.log(`🚀 Pushing...`);
  runCommand("git push");

  console.log("✅ Done!");
}

main();

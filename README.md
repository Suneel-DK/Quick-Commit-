# quick-commit-cli 

A lightweight CLI tool to streamline your git workflow with emoji-prefixed commits and automated staging/pushing.

## Features

- ✨ **Emoji prefixes** for different commit types
- 🔄 **Auto-staging** all changes with `git add .`
- 🚀 **Auto-pushing** to remote repository
- 📝 **Simple syntax** with optional type prefixes
- ⚡ **Fast workflow** - one command does it all

## Installation

Install globally via npm:

```bash
npm install -g quick-commit-cli
```

## Usage

### Basic Syntax

```bash
quick-commit <message>
quick-commit <type> <message>
```

### Examples

```bash
# Simple commit
quick-commit "update documentation"

# With type prefix (adds emoji automatically)
quick-commit feat "add user authentication"
quick-commit fix "resolve login issue"
quick-commit docs "update API documentation"
```

## Commit Types & Emojis

| Type | Emoji | Description |
|------|-------|-------------|
| `feat` | ✨ | New features |
| `fix` | 🐛 | Bug fixes |
| `docs` | 📝 | Documentation changes |
| `style` | 🎨 | Code style/formatting |
| `refactor` | ♻️ | Code refactoring |
| `chore` | 🔧 | Maintenance tasks |
| `test` | ✅ | Testing |

## What it does

1. **Stages all changes** - `git add .`
2. **Creates commit** - `git commit -m "your message"`
3. **Pushes to remote** - `git push`

## Example Workflow

```bash
# Traditional way
git add .
git commit -m "✨ feat: add dark mode toggle"
git push

# With quick-commit-cli
quick-commit feat "add dark mode toggle"
```

## Requirements

- Node.js installed
- Git repository initialized
- Remote repository configured

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`quick-commit feat "add amazing feature"`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Suneel D.K**

## Support

If you find this tool helpful, consider giving it a ⭐ on GitHub!

---

Made with ❤️ to simplify your git workflow
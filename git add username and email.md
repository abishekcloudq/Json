You can set your Git username and email globally (for all repositories) or locally (for a specific repository). Here’s how to do it:

### Set Username and Email Globally

```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Set Username and Email Locally (For a Specific Repository)

```sh
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

To verify your settings, use:

```sh
git config --global --list
# or for a specific repository
git config --list
```

Let me know if you need any help! 🚀
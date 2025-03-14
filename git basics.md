
Git is a distributed version control system widely used for tracking changes in source code during software development. Below is a detailed explanation of basic Git commands with examples:

---

### 1. **Initializing a Repository**
   - **Command**: `git init`
   - **Description**: Initializes a new Git repository in the current directory.
   - **Example**:
     ```bash
     git init
     ```
     This creates a hidden `.git` directory where Git stores all its metadata.

---

### 2. **Cloning a Repository**
   - **Command**: `git clone <repository-url>`
   - **Description**: Creates a copy of a remote repository on your local machine.
   - **Example**:
     ```bash
     git clone https://github.com/user/repo.git
     ```
     This downloads the repository into a directory named `repo`.

---

### 3. **Checking the Status**
   - **Command**: `git status`
   - **Description**: Shows the status of the working directory, including tracked, untracked, and modified files.
   - **Example**:
     ```bash
     git status
     ```
     Output might look like:
     ```
     On branch main
     Changes not staged for commit:
       (use "git add <file>..." to update what will be committed)
       modified:   README.md
     ```

---

### 4. **Adding Files to the Staging Area**
   - **Command**: `git add <file>`
   - **Description**: Adds changes in the working directory to the staging area (prepares them for commit).
   - **Examples**:
     ```bash
     git add file.txt          # Adds a specific file
     git add .                 # Adds all changes in the current directory
     git add *.js              # Adds all JavaScript files
     ```

---

### 5. **Committing Changes**
   - **Command**: `git commit -m "<commit-message>"`
   - **Description**: Records changes in the staging area to the repository with a descriptive message.
   - **Example**:
     ```bash
     git commit -m "Added new feature"
     ```
     This creates a new commit with the message "Added new feature".

---

### 6. **Viewing the Commit History**
   - **Command**: `git log`
   - **Description**: Displays the commit history of the repository.
   - **Example**:
     ```bash
     git log
     ```
     Output might look like:
     ```
     commit abc123 (HEAD -> main)
     Author: John Doe <john@example.com>
     Date:   Mon Oct 2 12:00:00 2023 +0000
         Added new feature
     ```

---

### 7. **Creating a New Branch**
   - **Command**: `git branch <branch-name>`
   - **Description**: Creates a new branch.
   - **Example**:
     ```bash
     git branch feature-branch
     ```

---

### 8. **Switching Branches**
   - **Command**: `git checkout <branch-name>`
   - **Description**: Switches to the specified branch.
   - **Example**:
     ```bash
     git checkout feature-branch
     ```
     Alternatively, you can create and switch to a new branch in one command:
     ```bash
     git checkout -b new-branch
     ```

---

### 9. **Merging Branches**
   - **Command**: `git merge <branch-name>`
   - **Description**: Merges changes from the specified branch into the current branch.
   - **Example**:
     ```bash
     git checkout main
     git merge feature-branch
     ```
     This merges `feature-branch` into `main`.

---

### 10. **Pulling Changes from a Remote Repository**
   - **Command**: `git pull`
   - **Description**: Fetches changes from the remote repository and merges them into the current branch.
   - **Example**:
     ```bash
     git pull origin main
     ```
     This updates your local `main` branch with changes from the remote `main` branch.

---

### 11. **Pushing Changes to a Remote Repository**
   - **Command**: `git push <remote> <branch>`
   - **Description**: Uploads local commits to the remote repository.
   - **Example**:
     ```bash
     git push origin main
     ```
     This pushes the local `main` branch to the remote `main` branch.

---

### 12. **Viewing Remote Repositories**
   - **Command**: `git remote -v`
   - **Description**: Lists all remote repositories associated with the local repository.
   - **Example**:
     ```bash
     git remote -v
     ```
     Output might look like:
     ```
     origin  https://github.com/user/repo.git (fetch)
     origin  https://github.com/user/repo.git (push)
     ```

---

### 13. **Fetching Changes from a Remote Repository**
   - **Command**: `git fetch`
   - **Description**: Downloads changes from the remote repository but does not merge them.
   - **Example**:
     ```bash
     git fetch origin
     ```

---

### 14. **Reverting Changes**
   - **Command**: `git checkout -- <file>`
   - **Description**: Discards changes in the working directory for a specific file.
   - **Example**:
     ```bash
     git checkout -- file.txt
     ```

---

### 15. **Resetting Changes**
   - **Command**: `git reset`
   - **Description**: Unstages changes from the staging area.
   - **Examples**:
     ```bash
     git reset file.txt          # Unstages a specific file
     git reset                   # Unstages all changes
     git reset --hard HEAD       # Discards all local changes (use with caution!)
     ```

---

### 16. **Stashing Changes**
   - **Command**: `git stash`
   - **Description**: Temporarily saves changes that are not ready to be committed.
   - **Examples**:
     ```bash
     git stash                  # Saves changes
     git stash pop              # Applies the most recent stash and removes it
     git stash list             # Lists all stashes
     ```

---

### 17. **Tagging**
   - **Command**: `git tag <tag-name>`
   - **Description**: Marks a specific point in the repository's history (often used for releases).
   - **Examples**:
     ```bash
     git tag v1.0.0             # Creates a lightweight tag
     git tag -a v1.0.0 -m "Release version 1.0.0"  # Creates an annotated tag
     git push origin v1.0.0     # Pushes the tag to the remote repository
     ```

---

### 18. **Viewing Differences**
   - **Command**: `git diff`
   - **Description**: Shows differences between the working directory and the staging area or between commits.
   - **Examples**:
     ```bash
     git diff                   # Shows unstaged changes
     git diff --cached          # Shows staged changes
     git diff commit1 commit2   # Shows differences between two commits
     ```

---

### 19. **Removing Files**
   - **Command**: `git rm <file>`
   - **Description**: Removes a file from the working directory and stages the deletion.
   - **Example**:
     ```bash
     git rm file.txt
     ```

---

### 20. **Renaming Files**
   - **Command**: `git mv <old-name> <new-name>`
   - **Description**: Renames a file and stages the change.
   - **Example**:
     ```bash
     git mv old.txt new.txt
     ```

---

### Summary Table

| **Command**            | **Description**                                      |
|-------------------------|------------------------------------------------------|
| `git init`              | Initializes a new Git repository.                   |
| `git clone <url>`       | Clones a remote repository.                         |
| `git status`            | Shows the status of the working directory.          |
| `git add <file>`        | Adds changes to the staging area.                   |
| `git commit -m "msg"`   | Commits changes with a message.                     |
| `git log`               | Displays the commit history.                        |
| `git branch <name>`     | Creates a new branch.                               |
| `git checkout <branch>` | Switches to a branch.                               |
| `git merge <branch>`    | Merges changes from another branch.                 |
| `git pull`              | Fetches and merges changes from a remote.           |
| `git push <remote>`     | Pushes local commits to a remote.                   |
| `git remote -v`         | Lists remote repositories.                          |
| `git fetch`             | Downloads changes from a remote.                    |
| `git reset`             | Unstages changes.                                   |
| `git stash`             | Temporarily saves changes.                          |
| `git tag <name>`        | Creates a tag.                                      |
| `git diff`              | Shows differences between files or commits.         |
| `git rm <file>`         | Removes a file.                                     |
| `git mv <old> <new>`    | Renames a file.                                     |

---

These commands form the foundation of using Git effectively. With practice, you'll become more comfortable managing your code and collaborating with others using Git!
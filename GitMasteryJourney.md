\# My Git Mastery Challenge Journey



\## Student Information

\- Name: G SiriNethi konda 

\- Student ID: 23A91A61F1 

\- Repository: https://github.com/sirinethikonda/git-solved-Ganisetti-Sirinethi-konda

\- Date Started: 27/10/2025 

\- Date Completed: 28/10/2025  



\## Task Summary

Cloned the instructor's repository containing pre-built conflicts a# My Git Mastery Challenge Journey



\## Student Information

\- Name: G SiriNethi konda 

\- Student ID: 23A91A61F1 

\- Repository: https://github.com/sirinethikonda/git-solved-Ganisetti-Sirinethi-konda

\- Date Started: 27/10/2025 

\- Date Completed: 28/10/2025  



\## Task Summary

Cloned the instructor's repository containing pre-built conflicts and successfully resolved all merge conflicts across multiple branches using proper Git workflows. Practiced stash, rebase, cherry-pick, reset, and revert.



\## Commands Used



| Command | Times Used | Purpose |

|---------|------------|----------|

| git clone | 1 | Clone instructor's repository |

| git checkout | 20+ | Switch between branches |

| git branch | 10+ | View and manage branches |

| git merge | 2 | Merge dev and conflict-simulator into main |

| git add | 30+ | Stage resolved conflicts |

| git commit | 15+ | Commit resolved changes |

| git push | 10+ | Push to my repository |

| git fetch | 2 | Fetch updates from instructor |

| git pull | 1 | Pull updates |

| git stash | 2 | Save temporary work |

| git cherry-pick | 1 | Copy specific commit |

| git rebase | 1 | Rebase feature branch |

| git reset | 3 | Undo commits (soft/mixed/hard) |

| git revert | 1 | Safe undo |

| git tag | 2 | Create release tags |

| git status | 50+ | Check repository state |

| git log | 30+ | View history |

| git diff | 20+ | Compare changes |



\## Conflicts Resolved



\### Merge 1: main + dev (6 files)



\#### Conflict 1: config/app-config.yaml

\- \*\*Issue\*\*: Production used port 8080, development used 3000

\- \*\*Resolution\*\*: Created unified config with environment-based settings

\- \*\*Strategy\*\*: Keep production as default, add dev as optional

\- \*\*Difficulty\*\*: Medium

\- \*\*Time\*\*: 15 minutes



\#### Conflict 2: config/database-config.json

\- \*\*Issue\*\*: Different database hosts and SSL modes

\- \*\*Resolution\*\*: Created separate profiles for production and development

\- \*\*Strategy\*\*: Restructured JSON to support both environments

\- \*\*Difficulty\*\*: Medium

\- \*\*Time\*\*: 10 minutes



\#### Conflict 3: scripts/deploy.sh

\- \*\*Issue\*\*: Different deployment strategies (production vs docker-compose)

\- \*\*Resolution\*\*: Added conditional logic based on `DEPLOY\_ENV`

\- \*\*Strategy\*\*: Made script handle both environments dynamically

\- \*\*Difficulty\*\*: Hard

\- \*\*Time\*\*: 20 minutes



\#### Conflict 4: scripts/monitor.js

\- \*\*Issue\*\*: Different monitoring intervals and log formats

\- \*\*Resolution\*\*: Environment-based configuration object

\- \*\*Strategy\*\*: Used `process.env.NODE\_ENV` to determine behavior

\- \*\*Difficulty\*\*: Medium

\- \*\*Time\*\*: 15 minutes



\#### Conflict 5: docs/architecture.md

\- \*\*Issue\*\*: Different architectural descriptions

\- \*\*Resolution\*\*: Merged both descriptions into comprehensive document

\- \*\*Strategy\*\*: Created sections for each environment

\- \*\*Difficulty\*\*: Easy

\- \*\*Time\*\*: 10 minutes



\#### Conflict 6: README.md

\- \*\*Issue\*\*: Different feature lists and version numbers

\- \*\*Resolution\*\*: Combined all features with clear environment labels

\- \*\*Strategy\*\*: Organized features by category

\- \*\*Difficulty\*\*: Easy

\- \*\*Time\*\*: 10 minutes



\### Merge 2: main + conflict-simulator (6 files)

\- \*\*Files\*\*: README.md, config/app-config.yaml, config/database-config.json, docs/architecture.md, scripts/deploy.sh, scripts/monitor.js  

\- \*\*Resolution Strategy\*\*: 

&nbsp; 1. Kept stable production code as primary

&nbsp; 2. Added experimental features behind feature flags

&nbsp; 3. Documented that experimental features are not production-ready

&nbsp; 4. Maintained backward compatibility  



\## Most Challenging Parts



1\. \*\*Understanding Conflict Markers\*\*: `<<<<<<<`, `=======`, `>>>>>>>` initially confusing; learned HEAD is current branch and the other side is incoming.

2\. \*\*Deciding What to Keep\*\*: Hardest part was choosing between conflicting code. Always read both versions fully.

3\. \*\*Complex Logic Conflicts\*\*: `deploy.sh` had completely different logic. Needed careful integration.

4\. \*\*Testing After Resolution\*\*: Ensured resolved code actually ran.



\## Key Learnings



\### Technical Skills

\- Mastered conflict resolution workflow

\- Understood merge conflict markers

\- Learned effective use of `git diff`, `git status`, `git log`

\- Practiced stash, rebase, cherry-pick, reset, revert



\### Best Practices

\- Always read both sides of conflict before resolving

\- Test resolved code before committing

\- Write clear, detailed commit messages

\- Commit atomically

\- Document resolution strategy



\### Git Workflow Insights

\- Conflicts are normal, not errors

\- Take time to understand both changes

\- When in doubt, consult instructor or documentation

\- Keep calm and read carefully

\- Use `git reflog` to recover lost commits



\## Reflection

This challenge taught me that merge conflicts are just Git asking "which version do you want?". The key is understanding what each side is doing.  

Hands-on practice with all Git commands (especially rebase and cherry-pick) reinforced confidence in real-world Git workflows.  



---



nd successfully resolved all merge conflicts across multiple branches using proper Git workflows. Practiced stash, rebase, cherry-pick, reset, and revert.



\## Commands Used



| Command | Times Used | Purpose |

|---------|------------|----------|

| git clone | 1 | Clone instructor's repository |

| git checkout | 20+ | Switch between branches |

| git branch | 10+ | View and manage branches |

| git merge | 2 | Merge dev and conflict-simulator into main |

| git add | 30+ | Stage resolved conflicts |

| git commit | 15+ | Commit resolved changes |

| git push | 10+ | Push to my repository |

| git fetch | 2 | Fetch updates from instructor |

| git pull | 1 | Pull updates |

| git stash | 2 | Save temporary work |

| git cherry-pick | 1 | Copy specific commit |

| git rebase | 1 | Rebase feature branch |

| git reset | 3 | Undo commits (soft/mixed/hard) |

| git revert | 1 | Safe undo |

| git tag | 2 | Create release tags |

| git status | 50+ | Check repository state |

| git log | 30+ | View history |

| git diff | 20+ | Compare changes |



\## Conflicts Resolved



\### Merge 1: main + dev (6 files)



\#### Conflict 1: config/app-config.yaml

\- \*\*Issue\*\*: Production used port 8080, development used 3000

\- \*\*Resolution\*\*: Created unified config with environment-based settings

\- \*\*Strategy\*\*: Keep production as default, add dev as optional

\- \*\*Difficulty\*\*: Medium

\- \*\*Time\*\*: 15 minutes



\#### Conflict 2: config/database-config.json

\- \*\*Issue\*\*: Different database hosts and SSL modes

\- \*\*Resolution\*\*: Created separate profiles for production and development

\- \*\*Strategy\*\*: Restructured JSON to support both environments

\- \*\*Difficulty\*\*: Medium

\- \*\*Time\*\*: 10 minutes



\#### Conflict 3: scripts/deploy.sh

\- \*\*Issue\*\*: Different deployment strategies (production vs docker-compose)

\- \*\*Resolution\*\*: Added conditional logic based on `DEPLOY\_ENV`

\- \*\*Strategy\*\*: Made script handle both environments dynamically

\- \*\*Difficulty\*\*: Hard

\- \*\*Time\*\*: 20 minutes



\#### Conflict 4: scripts/monitor.js

\- \*\*Issue\*\*: Different monitoring intervals and log formats

\- \*\*Resolution\*\*: Environment-based configuration object

\- \*\*Strategy\*\*: Used `process.env.NODE\_ENV` to determine behavior

\- \*\*Difficulty\*\*: Medium

\- \*\*Time\*\*: 15 minutes



\#### Conflict 5: docs/architecture.md

\- \*\*Issue\*\*: Different architectural descriptions

\- \*\*Resolution\*\*: Merged both descriptions into comprehensive document

\- \*\*Strategy\*\*: Created sections for each environment

\- \*\*Difficulty\*\*: Easy

\- \*\*Time\*\*: 10 minutes



\#### Conflict 6: README.md

\- \*\*Issue\*\*: Different feature lists and version numbers

\- \*\*Resolution\*\*: Combined all features with clear environment labels

\- \*\*Strategy\*\*: Organized features by category

\- \*\*Difficulty\*\*: Easy

\- \*\*Time\*\*: 10 minutes



\### Merge 2: main + conflict-simulator (6 files)

\- \*\*Files\*\*: README.md, config/app-config.yaml, config/database-config.json, docs/architecture.md, scripts/deploy.sh, scripts/monitor.js  

\- \*\*Resolution Strategy\*\*: 

&nbsp; 1. Kept stable production code as primary

&nbsp; 2. Added experimental features behind feature flags

&nbsp; 3. Documented that experimental features are not production-ready

&nbsp; 4. Maintained backward compatibility  



\## Most Challenging Parts



1\. \*\*Understanding Conflict Markers\*\*: `<<<<<<<`, `=======`, `>>>>>>>` initially confusing; learned HEAD is current branch and the other side is incoming.

2\. \*\*Deciding What to Keep\*\*: Hardest part was choosing between conflicting code. Always read both versions fully.

3\. \*\*Complex Logic Conflicts\*\*: `deploy.sh` had completely different logic. Needed careful integration.

4\. \*\*Testing After Resolution\*\*: Ensured resolved code actually ran.



\## Key Learnings



\### Technical Skills

\- Mastered conflict resolution workflow

\- Understood merge conflict markers

\- Learned effective use of `git diff`, `git status`, `git log`

\- Practiced stash, rebase, cherry-pick, reset, revert



\### Best Practices

\- Always read both sides of conflict before resolving

\- Test resolved code before committing

\- Write clear, detailed commit messages

\- Commit atomically

\- Document resolution strategy



\### Git Workflow Insights

\- Conflicts are normal, not errors

\- Take time to understand both changes

\- When in doubt, consult instructor or documentation

\- Keep calm and read carefully

\- Use `git reflog` to recover lost commits



\## Reflection

This challenge taught me that merge conflicts are just Git asking "which version do you want?". The key is understanding what each side is doing.  

Hands-on practice with all Git commands (especially rebase and cherry-pick) reinforced confidence in real-world Git workflows.  



---






# 个人网页维护与自动发布操作指南

适用项目：Zhenchuan Yang 的新版学术主页。最近修订与核对日期：2026 年 10 月 6 日。

## 1. 先认清正在维护的网站

| 项目 | 地址或设置 |
| --- | --- |
| 本地工作目录 | `D:\OneDrive\03-projects\202607-personal-webpage` |
| 应用中的本地项目名称 | `202607-personal-website` |
| GitHub 仓库 | <https://github.com/ZhenchuanYang/personal-webpage> |
| 新版网页正式地址 | <https://zhenchuanyang.github.io/personal-webpage/> |
| 发布分支 | `main` |
| Pages 发布方式 | `Deploy from a branch` |
| 发布文件夹 | `/ (root)` |
| 发布进度 | <https://github.com/ZhenchuanYang/personal-webpage/actions> |
| Pages 设置 | <https://github.com/ZhenchuanYang/personal-webpage/settings/pages> |

另一个仓库 `ZhenchuanYang.github.io` 承载旧主页，地址是 <https://zhenchuanyang.github.io/>。本指南操作的是新版网页仓库。若以后要用新版替换旧主页，应单独处理迁移。

## 2. 你以后只需怎样操作

日常流程是：告诉 Codex 更新内容 → 在本地预览 → 确定发布 → 同步到 GitHub → Pages 自动更新。

在已经关联上述本地目录的项目聊天中操作即可，无需另外创建 Codex 专用项目。现有聊天已经能访问这个目录；以后新开聊天时，从 `202607-personal-website` 项目进入，并确认它可以读取项目文件和执行 Git 同步。

开始一次新的维护聊天时，可以先说：

> 请先阅读项目里的 PUBLISHING.zh-CN.md，按指南维护个人网页。涉及发布方式或连接设置的修订时，同步更新这份指南。

这里的自动发布是“推送到 GitHub 后，Pages 自动更新”。保存本地文件后，仍需完成提交和推送。

本地电脑负责编辑和预览。网站由 GitHub Pages 提供访问，电脑关机后网站仍可访问。Codespace 可以按需使用；它的删除不会删除已经保存在 GitHub 仓库中的代码。

本项目由 HTML、CSS、JavaScript 和静态文件组成，无需安装 Node.js、运行构建命令或维护服务器。

## 3. 首次连接：由 Codex 协助完成

本机首次连接、登录恢复、推送和 Pages 发布核验已完成。下面保留设置步骤，供换电脑、重新建立工作目录或排查配置时参考，日常更新不用重复执行。

1. 在应用中打开关联上面本地目录的项目，确认当前工作的是新版网页。
2. 检查 GitHub 仓库的 `main` 分支与本地版本，保留两边已有修改。
3. 将本地的远程连接 `origin` 指向 `https://github.com/ZhenchuanYang/personal-webpage.git`。
4. 如果两边历史分别建立，先衔接历史、处理冲突，再推送。不要用强制推送覆盖云端。本次核对发现网页、样式、脚本和静态资源一致；README 的差异已在设置过程中处理。
5. 检查本机 GitHub 登录。如果 Git 提示登录，在官方 GitHub 页面自行完成登录或验证；无需在聊天里发送密码或令牌。
6. 打开 Pages 设置，确认发布来源。已有可用配置时保留它；如果确实需要配置，选择 `Deploy from a branch`、`main`、`/ (root)`，再点 `Save`。
7. 推送一次文档更新，查看 Actions 是否成功，并核验正式网站仍可访问。

完成标准：本地 `main` 跟踪 `origin/main`；远程地址正确；本地和云端最新提交一致；对应提交的 Pages 发布成功。

### 首次设置完成记录（2026 年 10 月 6 日）

- Git 和 Git Credential Manager 已安装。
- 本机已有 `ZhenchuanYang` 的 GitHub 登录账户。
- 首次连接时检测到保存的登录凭据失效；重新登录后，正式推送已成功。
- 仓库已有成功的 Pages 自动发布记录，来源分支为 `main`。
- 首次完整流程验证对应提交为 `ee483f3`，其 [Pages 发布结果为 Success](https://github.com/ZhenchuanYang/personal-webpage/actions/runs/37403331434)。这是首次验证记录，后续更新的最新版本以提交历史和 Actions 为准。
- 核对时，新版在线网页与本地 `index.html` 内容一致。
- 核对时，正式网页、样式、脚本、头像和英文简历均返回正常访问结果。
- 衔接前的本地版本保存在备份分支 `codex/before-github-connection-20261006`。

备份分支只是首次衔接前的版本记录，后续修改仍在 `main` 中进行。

### 本机的 Git 连接设置

首次连接检查发现 Windows 已启用本机代理 `http://127.0.0.1:7897`，但 Git 默认没有使用它。让 Git 使用同一代理后，同步和模拟推送恢复正常。

本项目使用仓库内的 Git 配置，指定 GitHub 连接走这个已启用的代理；它不修改全局 Git 配置或 Windows 代理设置，也不会保存到公开仓库文件里。

如果以后更换代理软件、端口，或不再使用代理，告诉 Codex 核对 Windows 当前连接方式并更新本项目配置。换电脑或重新克隆项目时，应重新核对连接方式，而不是照搬这个端口。

可使用下面的请求：

> 请检查当前 Windows 代理和这个项目的 GitHub 连接。如果本机代理变化，请更新项目内的 Git 设置，然后检查同步是否恢复正常。

### 登录失效时：重新登录 GitHub

当前首次设置已完成。只有以后再次提示登录失效时，才需要执行本节步骤；每次更新网页不用重新登录。此步骤在 Windows 的 PowerShell 或终端中执行，无需管理员权限。

1. 在开始菜单搜索并打开“PowerShell”。
2. 粘贴下面这一行，按回车：

   ```powershell
   git credential-manager github login --username ZhenchuanYang --browser --force
   ```

3. 如果浏览器打开官方 GitHub 登录或授权页面，使用 `ZhenchuanYang` 账户登录，按页面要求完成两步验证及 Git Credential Manager 的登录授权。
4. 返回 PowerShell，等待命令结束。不同版本的工具可能显示不同的完成提示；命令返回后可回到 Codex 告知“GitHub 已重新登录”，由 Codex 检查是否真的可以推送。
5. 如果浏览器没有打开，或命令长时间没有响应，按 `Ctrl + C` 结束该次尝试，再试设备登录：

   ```powershell
   git credential-manager github login --username ZhenchuanYang --device --force
   ```

   工具若显示一次性代码和登录地址，在自己的浏览器中打开 <https://github.com/login/device> 并输入该代码，然后完成账户验证。只有工具实际显示代码后，才需要打开设备验证页面。
6. 如果两种登录方式都失败，把不含密码、令牌或验证码的错误提示告诉 Codex，继续排查连接。

重新登录后，让 Codex 检查同步是否恢复，并继续当次已准备好的更新。同步成功后，核验对应的 Pages 运行结果。

## 4. 第一次自己跟着操作：一次本地预览

1. 打开关联本地目录的 `202607-personal-website` 项目。
2. 打开文件夹中的 `index.html`，使用浏览器查看。文件管理器里双击它即可。
3. 缩窄浏览器窗口，检查手机宽度下文字、图片和论文卡片是否正常。
4. 点击论文分类和新闻展开按钮，确认交互正常。
5. 检查简历链接是否能打开。

这只是预览，不会发布。如果浏览器仍显示修改前的内容，刷新页面；也可以让 Codex 开启临时本地预览。

## 5. 日常更新：选用下面一种方式

### 方式 A：让 Codex 修改并直接发布

在此项目的聊天中给出内容和明确的发布要求，例如：

> 请在个人网页里添加下面这篇论文，并更新 News。检查本地显示、论文链接和手机布局后，提交并推送到 personal-webpage 的 main 分支，等待 GitHub Pages 发布成功，并给我正式网页链接。

提供论文标题、作者、期刊、年份、DOI 和封面图片等实际信息即可。缺少内容时，Codex 应先确认必要信息。

### 方式 B：先看效果，再决定发布

第一条消息：

> 请更新我的个人网页，先在本地修改并给我预览，等我看过后再发布。

看完后发送：

> 预览没问题，请把本次修改提交并推送到 personal-webpage 的 main 分支，核验 Pages 发布结果。

这两种方式都保留明确的发布动作。仅保存文件不会让在线网页自动改变。

### 方式 C：自己使用 GitHub Desktop（可选）

如果你希望自己用按钮完成同步，可以从 <https://desktop.github.com/> 安装 GitHub Desktop，并登录同一 GitHub 账户。

1. 选择 `File → Add local repository`，添加本指南中的本地目录。
2. 确认仓库为 `personal-webpage`，当前分支为 `main`。
3. 开始修改前点击 `Fetch origin`；如显示 `Pull origin`，先同步云端更新。
4. 修改、预览后，在 Changes 中查看变动文件。
5. 填写简短说明，如“更新论文列表”，点击 `Commit to main`。
6. 点击 `Push origin`。
7. 查看 Actions 发布状态和正式网页。

如果出现冲突或推送被拒绝，先让 Codex 协助检查。使用方式 A 或 B 时，不必安装 GitHub Desktop。

## 6. 怎样判断已经发布成功

“文件已保存”“提交完成”“推送完成”和“网站发布完成”是四个不同阶段。

1. 打开仓库，确认 `main` 上能看到本次修改和最新提交。
2. 打开 Actions，找到与该提交对应的 `pages build and deployment` 运行。
3. 等待运行结束，确认结果是 `Success`；运行中、等待中或失败都不算完成。
4. 打开新版正式地址，必要时按 `Ctrl + F5` 强制刷新。
5. 检查本次修改、图片和简历等资源是否真实显示。

如果这次只修改了指南或 README，网页外观不会变化；应以最新提交、对应发布成功和网站可访问作为验证结果。

发布耗时可能变化，以 Actions 的实际状态为准。若 Codex 暂时无法联网，应明确报告已完成到哪一步，而不是把本地保存视为发布成功。

## 7. 修改内容时对应哪些文件

| 想修改的内容 | 文件 |
| --- | --- |
| 简介、教育经历、新闻、论文、联系方式 | `index.html` |
| 字体、颜色、间距、手机布局 | `styles.css` |
| 论文筛选、新闻展开等交互 | `script.js` |
| 头像 | `public/profile.jpg` |
| 英文简历 | `public/CV_English.pdf` |
| 论文和会议配图 | `public/` 下相应文件 |

保持资源路径相对于网页，例如 `public/profile.jpg`。新版位于 `/personal-webpage/` 子路径，使用 `/public/profile.jpg` 这类根路径可能指向旧主页的目录。

## 8. 常见问题

### 本地更新了，在线没有变化

检查是否已经推送，以及对应提交的 Pages 发布是否成功。然后确认打开的是新版地址，而不是旧主页或本地文件。

### 提示需要登录 GitHub

按 Git 的官方登录提示完成账户验证。不要在聊天里贴密码或令牌。如果登录失效或无法连接，让 Codex 检查具体错误。

### 推送被拒绝，提示云端有新修改

这通常表示云端出现了本地还没有的提交。先获取并核对差异，再合并。不要直接强制覆盖。尤其是在 GitHub 网页中编辑过文件后，应先同步再继续本地修改。

### 发布后发现内容有问题

告诉 Codex 出错的内容，或说明需要恢复到哪个版本。可以修正后再次发布，也可以通过新增一个撤销提交恢复此前版本；这样保留完整记录。

### Codespace 被删除了

继续使用本地项目即可。已经推送到 GitHub 的代码和独立运行的 Pages 网站不依赖该开发环境。

### OneDrive 已同步，为什么网站没更新

OneDrive 同步与 GitHub 推送是两套流程。网站更新仍需把提交推送到发布仓库，再等待 Pages 发布成功。

## 9. 可交给 Codex 的发布检查

每次发布时，可以要求 Codex：

1. 确认目标仍为 `ZhenchuanYang/personal-webpage` 和 `main`。
2. 核对云端新提交，并处理需要保留的差异。
3. 预览本次修改，检查相关链接、资源和必要的手机布局。
4. 查看本次变动，只提交预期文件。
5. 推送后核验云端提交和对应 Pages 发布。
6. 提供正式链接、提交说明和是否发布成功。

## 10. 配置和操作记录保存在哪里

| 内容 | 保存位置 | 是否随仓库文件上传到 GitHub |
| --- | --- | --- |
| 远程仓库地址、分支跟踪、项目代理设置 | 本地隐藏文件 `.git/config` | 否，换电脑或重新克隆后应核对本机设置 |
| GitHub 登录凭据 | 本机 Git Credential Manager 管理的凭据存储 | 否，换电脑后需要登录 |
| Pages 发布来源 | GitHub 仓库的 `Settings → Pages` | 保存在 GitHub 服务器，不依赖本机文件 |
| 修改和撤销记录 | Git 提交历史 | 推送后保存在 GitHub |
| 每次自动发布结果 | GitHub Actions 运行记录 | 保存在 GitHub |
| 日常步骤、当前方案和故障处理 | 本指南及 `README.md` | 提交并推送后保存在 GitHub |

本指南是操作说明，Git 和 Pages 的实际配置分别保存在对应位置。修改指南文字不会自动修改 Git 配置或 Pages 设置；修改实际配置后也应同步修订指南。

关闭聊天不会清除已经保存的配置。未来聊天应读取本指南并核对实际设置；不要仅依靠旧聊天中的描述。

## 11. 操作修订时，怎样同步更新本指南

### 需要更新的变化

- 工作目录、仓库、发布分支、正式网址或 Pages 发布方式发生变化。
- 登录或代理的处理方式改变，或者增加了新的预览、检查和发布步骤。
- 发现原有说明已过时，或已有问题解决，需要修正“待完成”等状态描述。

只添加一篇论文、替换头像或更新新闻，通常不需要修改操作指南；这些内容变化通过 Git 提交历史记录即可。

### 同步更新流程

1. 先完成实际操作，并核验修改后的流程能正常工作。
2. 更新本指南受影响的步骤、配置说明及最近修订日期；如 `README.md` 也提到该设置，一并修正。
3. 将指南修订与对应的项目修改一起提交。变更原因写进提交说明，保留 Git 历史作为修订记录。
4. 如果此次要求发布，将指南一并推送到 GitHub；若要求仅本地预览，先留在本地，等发布时一起同步。
5. 推送后确认 GitHub 上的指南内容已更新，并检查对应的 Pages 发布结果。

在聊天中可以这样要求：

> 请修订这项操作，完成后同步更新 PUBLISHING.zh-CN.md 中受影响的步骤和日期；确认方案可用后，将指南与本次修改一起提交并推送，再核验发布结果。

不需要另建重复的操作日志，也不需要每次新增一份指南。持续维护这一份文件即可。

## 12. 官方参考

- [GitHub Pages 发布来源与自动发布](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [向 GitHub Desktop 添加本地仓库](https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop)
- [在 GitHub 网页编辑文件](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- [Codespaces 自动删除和保留设置](https://docs.github.com/en/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces)
- [本地项目、文件夹与聊天](https://learn.chatgpt.com/docs/projects)

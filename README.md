# 목차

[1. 프로젝트 시작 전 고민](#프로젝트를-시작하기-전)
[2. 프로젝트 셋업하며](#프로젝트-셋업)
[3. 프로젝트 시작 후 고민](#프로젝트를-시작하며)
[4. 배포 고민](#배포)

해당 문서는 관악연구소 웹 개발을 하며 정리한 문서로, 시간 순으로 나열하였습니다. 각 작업의 필요성과 해당 작업을 선택한 이유에 대해서 서술하고 정리했습니다. 프로젝트를 처음 시작 할때 드는 의문을 정리하고 여러 방법들을 찾아본 후 프로젝트 성격에 맞는 방법을 선택했습니다.

## 프로젝트를 시작하기 전

프로젝트를 시작할때 목표는 모든 개발자가 깃허브를 사용하면서 똑같은 환경에서 개발하며, 개발 이외의 것들을 신경쓰지 않도록 하는 것으로 설정하였습니다.

### .gitignore

깃를 사용하다보면 종종 필요없는 파일(시스템 파일 등등)이 들어가곤 합니다. 이를 사전에 방지하기 위해서 [gitignore.io](https://www.toptal.com/developers/gitignore)를 활용했습니다. 키워드로는 `windows`,`mac`, `react`, `yarn` 을 입력하여 파일을 생성했습니다. 또한 .env.\*, dist/, .vscode를 추가하였습니다.

### git convention

모든 개발자가 커밋 내용을 일관되게 작성할 수 있도록 컨벤션을 정의하였습니다. 이를 통해 작업 내용을 쉽게 파악할 수 있으며, 의도적으로 작업 단위를 분리할 수 있도록 하였습니다. [Conventional Commits](https://www.conventionalcommits.org/)을 기반으로 하였고 세부 내용은 다음과 같습니다.

```text

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

```

#### type

| 타입       | 의미                                    |
| ---------- | --------------------------------------- |
| `build`    | 빌드 관련 작업 수행 (배포 파일 생성 등) |
| `chore`    | 프로젝트 설정 관련 작업 수행            |
| `ci`       | CI/CD 파이프라인 관련 작업 수행         |
| `docs`     | 문서 작성 또는 수정                     |
| `feat`     | 새로운 기능 추가                        |
| `fix`      | 버그 수정                               |
| `refactor` | 코드 리팩토링                           |
| `style`    | 스타일 변경                             |
| `test`     | 테스트                                  |
| `rename`   | 파일 및 폴더 이름 재설정 및 이동        |
| `!HOTFIX`  | 릴리즈 버전 치명적인 버그 수정          |

#### extra

header-max-length: 100
body-max-length: 100

### git branch 전략

위 작업까지 다 완료했다면 이제 깃을 효율적으로 사용하기 위해서 깃 브랜치 전략에 대해서 정해야합니다. git flow, github flow 등등 여러 방법이 있지만 그 중 git flow를 선택하였습니다. 사실 이것은 여러 인원에서 작업하는 것이 효율적인 방식이기 때문에 맞지 않는 전략이지만 이후 늘어날 것이라고 생각하여 사용하기로 하였습니다.

#### git-flow

해당 프로젝트에서 쓸 브랜치를 정의하겠습니다.

| 부모 브랜치 | 브랜치 명   | 역할                                     | 병합 브랜치  |
| ----------- | ----------- | ---------------------------------------- | ------------ |
|             | `main`      | product 서버에 배포 및 버전 관리         |              |
| `main`      | `dev`       | 각각의 기능 개발이 끝난 후 취합          | `main`       |
| `dev`       | `feature/*` | 기능 개발                                | `dev`        |
| `dev`       | `release`   | 배포 테스트 및 QA 진행                   | `dev`,`main` |
| `main`      | `hotfix`    | product 서버에서 문제가 생겼을 시에 처리 | `dev`,`main` |

### tagging convention

`v<MAJOR>.<MINOR>.<PATCH>` 형식을 준수하고, 프리릴리즈 태그는 `alpha` (내부 테스트), `beta` (공개 테스트), `rc` (릴리즈 전 최종 테스트)로 관리합니다.
태그를 통해 자동 배포를 관리하는 것도 고려하고 있습니다.

### vscode 설정

이 부분은 vscdoe를 사용하신다면 공유하기 좋은 세팅입니다.

```text
{
    // 파일을 저장할 때마다 `eslint` 규칙에 따라 자동으로 코드를 수정
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    // `prettier`를 기본 포맷터로 지정
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    // 파일을 저장할 때마다 포매팅 실행
    "editor.formatOnSave": true
}


```

## 프로젝트 셋업

프론트 개발은 기본적으로 REACT로 진행하며 typescript로 개발합니다. CRA대신 [VITE](https://ko.vite.dev/guide/)를 사용합니다.

```text
vite: 6.2.0
react: 19.0.0
typescript: ~5.7.2
```

### ESLint & Prettier

ESLint는 코드의 품질을 검사해주는 도구입니다. 이 때 ESLint와 Prettier의 포맷팅 충돌을 방지하기 위해 `eslint-config-prettier` 라이브러리를 활용했습니다. `eslint-config-prettier` 라이브러리는 Prettier와 충돌하는 ESLint 포맷팅 규칙을 off 처리합니다. 이를 통해 Prettier한테 포맷팅 맡기고, ESLint는 포맷팅 관련 규칙을 사용하지 않게 됩니다.

```bash
yarn add -D prettier
yarn add -D eslint
yarn add -D eslint-config-prettier  # eslint에서 prettier와 충돌나는 세팅을 끔, flat config에서는 추가하지 않음.
yarn add -D eslint-plugin-prettier  # eslint가 prettier 룰을 실행하여 오류가 나게 함
```

vite에서는 eslint.config.js라는 파일인 flat config 현태로 eslint를 설정하도록 설정되어있기 떄문에 위 패키지를 다음과 같이 적용해주면 됩니다.

#### ESLint 설정

```js
// eslint.config.js
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  {
    ...,
    plugins: {
      ...,
      prettier, // plugin 추가
    },
    rules: {
      ...,
      'prettier/prettier':'warn',
    }
  }
)

```

#### Prettier 설정

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "semi": true,
  "useTabs": false,
  "endOfLine": "lf"
}
```

`prettier` 설정은 다음과 같습니다. `useTabs` 속성을 true로 설정하면 스페이스 대신 탭을 사용하기 때문에 IDE마다 탭 사이즈가 달라지는 이슈가 있습니다. 따라서 false로 해주는 것이 일반적입니다.

### VSCode

`settings.json` 파일에서는에는 git clone 시 모든 개발자가 동일한 개발환경을 갖출 수 있도록 editor를 수정합니다.
json 내부 속성은 editor에서 파일 저장 시 코드를 자동 포맷팅하도록 설정합니다.

```json
// .vscode/settings.json
// vscode에 깔려있는 다른 확장 프로그램떄문에 충돌나는 것을 방지함
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## 프로젝트를 시작하며

### 폴더 구조

```text

src
├── components
│   ├── common
│   └── feature
├── hooks
├── lib
│   ├── assets
│   │   ├── fonts
│   │   ├── icon
│   │   ├── images
│   │   └── styles
│   ├── constants
│   └── types
├── pages
├── store
└── utils

```

- `components` : 컴포넌트가 위치한 폴더
  - `common` : 재사용 가능한 공통 컴포넌트를 모아둔 폴더
  - `feature` : 특정 기능과 관련된 컴포넌트를 모아둔 폴더
- `hooks` : 커스텀 훅을 저장하는 폴더
- `lib` : 프로젝트 전역에서 사용하는 외부 라이브러리나 공통 모듈을 관리하는 폴더
  - `assets` : 정적 파일을 관리하는 폴더
    - `fonts`
    - `icon`
    - `images`
    - `styles`
  - `constants`
  - `types`
- `pages` : 라우팅과 관련된 페이지 컴포넌트를 관리하는 폴더
- `store` : 전역 상태 관리를 위한 폴더.
- `utils` : 프로젝트에서 공통적으로 사용하는 유틸리티 함수들을 관리하는 폴더.

### 네이밍 컨벤션

특별하게 정한 컨벤션은 있지 않습니다. 다만 interface보다 type으로 사용하기로 했습니다.

### husky 설정

```bash
yarn add -D husky lint-staged
yarn add -D @commitlint/cli

# commitlint.config.js
# lint-staged.config.js

```

## 배포

배포는 aws의 cloudfront와 ec2를 통해서 배포를 하기로 했습니다.

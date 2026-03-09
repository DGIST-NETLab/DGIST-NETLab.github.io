# NET Lab Website

DGIST NET Lab (Next-generation Experience and Technology Lab) 홈페이지.  
Jekyll 기반 정적 사이트로, GitHub Pages에 배포 가능합니다.

## 구조

```
_config.yml          # 사이트 설정 (연락처, 제목 등)
_layouts/            # 페이지 레이아웃 템플릿
_includes/           # 공통 컴포넌트 (헤더, 푸터)
_data/
  team.yml           # 팀원 정보 → team.html에서 자동 렌더링
  publications.yml   # 논문 목록 → publications.html에서 자동 렌더링
_posts/              # 뉴스 게시글 (마크다운)
assets/              # CSS, JS, 폰트, 이미지
```

## 유지보수 가이드

### 뉴스 추가
`_posts/` 폴더에 마크다운 파일 추가:
```
_posts/2026-03-09-새로운소식.md
```
파일 내용:
```markdown
---
layout: post
title: "게시글 제목"
date: 2026-03-09
author: netlab
---

본문 내용을 여기에 작성합니다.
```
공지사항으로 표시하려면 `notice: true` 추가.

### 팀원 추가/제거
`_data/team.yml` 수정:
```yaml
students:
  - name: "홍길동"
    role: "M.S. Student"
    email: "example@dgist.ac.kr"
    photo: "프로필사진파일명"
```
프로필 사진은 `assets/images/`에 추가.

### 논문 추가
`_data/publications.yml`에 항목 추가:
```yaml
  - id: "C9"
    authors: "저자명"
    title: "논문 제목"
    venue: "학회 정보"
    doi: "https://doi.org/..."
```

## 로컬 실행
```bash
bundle install
bundle exec jekyll serve
```
http://localhost:4000 에서 확인.

## GitHub Pages 배포
1. GitHub에 `username.github.io` 레포 생성 (또는 원하는 레포명)
2. 이 폴더의 내용을 push
3. Settings → Pages → Source: main branch
4. `_config.yml`의 `url`과 `baseurl` 수정

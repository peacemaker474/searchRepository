# Intro

Github Open API를 통한 Repository 검색 기능을 구현했다.

자신이 원하는 유저의 Repository를 검색할 수 있으며, 관심이 있는 Repository를 localStorage에 저장할 수 있다.

저장된 Repositories의 Issue를 한 곳에서 모아 볼 수 있다.

# Setting

시작전 Terminal을 통해 npm install을 해주시기 바랍니다.

### src/network/api.js
    const userName = "peacemaker474"; // 검색하고 싶은 유저의 github 아이디를 입력해주세요.

### src/pages/IssuesPage.jsx
    useEffect(() => {
        // 현재 로컬스토리지에 저장된 각 레포지토리별로 이슈를 가져올 수 있도록 했습니다.
        // fetchGetReposIssues().then((res) => {
        //     setIssueData(res);
        //     setIsLoading(false);
        // });

        // 레포지토리 자체에 이슈가 없어서 테스트 용으로 만든겁니다.
        testGetIssues().then((res) => {
            setIssueData(res);
            setIsLoading(false);
        });

    }, [])

현재 주석 처리된 ``` fetchGetReposIssues()```에 대한 주석을 풀고, ```testGetIssues()``` 을 주석 처리하면 됩니다.

# 기능

## Search Repositories & Save Repository

> Home 화면에 있는 검색창을 통해 원하는 Repository를 검색할 수 있으며, 우측에 같이 있는 등록 버튼을 통해 LocalStorage에 저장할 수 있습니다.

## Delete Repositories
> 삭제하고 싶은 레포지토리는 검색창이나 Repositories 페이지로 이동해서 삭제하면 됩니다.

## Get Issues by Repositories
> Issues 페이지 내에서 로컬스토리지에 등록된 레포지토리를 가져올 수 있습니다.


# 추후 추가할 사항
- 현재는 직접 원하는 유저를 입력하고 검색을 해야 Repository를 가져올 수 있지만, 추후 사용자에 Followers 목록을 받아온 후 Follwers 목록과 함께 검색을 했을때 해당 유저에 대한 Repository를 검색할 수 있게끔 추가할 예정이다.

- 반응형
const userName = "peacemaker474"; // 검색하고 싶은 유저의 github 아이디를 입력해주세요.

// 레포지토리 가져오기
export const getRegisterData = () => {
    return JSON.parse(localStorage.getItem("repo"));
};

// 레포지토리 저장
export const setRegisterData = (value) => {
    const getRepos = getRegisterData();
    if (!getRepos) localStorage.setItem("repo", JSON.stringify([]));

    const checkSameRepos = getRepos?.filter((item) => item.name === value.name);

    if (checkSameRepos.length !== 0) return alert("이미 등록하신 레포지토리입니다.");
    if (getRepos.length >= 4) return alert("최대 등록은 4개이며, 더 이상 등록할 수 없습니다.");

    const newRepos = [
        ...getRepos,
        value,
    ];

    localStorage.setItem("repo", JSON.stringify(newRepos));
    alert("저장에 성공하셨습니다.");
    return true;
};


// 레포지토리 삭제
export const removeReposData = (value) => {
    const getRepos = getRegisterData();
    let removeRepos = getRepos.filter((item) => String(item.id) !== String(value));

    if (window.confirm("정말로 삭제하시겠습니까?")) {
        localStorage.setItem("repo", JSON.stringify(removeRepos));
        alert("삭제가 완료되었습니다.");
        return true;
    }

    return false;
};

export const fetchGetUserRepositories = async () => {
    const response = await (
        await fetch(`https://api.github.com/users/${userName}/repos`)
    ).json();

    return response;
};

// 로컬스토리지에 저장된 이슈 목록 요청 및 가져오기;
export const fetchGetReposIssues = async () => {
    const repos = getRegisterData();
    const newData = await Promise.all(
        repos.map(async (issue) => {
            const response = await (await fetch(`${issue.url}/issues?per_page=25`)).json();
            const newRes = response.map((data) => ({
                ...data,
                name: issue.name,
                language: issue.language
            }))
            return [...newRes]
        })
    )

    return newData.flat();
};

// 테스트용 이슈 요청
export const testGetIssues = async () => {
    const apiUrl = [
        "https://api.github.com/repos/react-hook-form/devtools/issues?per_page=25",
        "https://api.github.com/repos/TanStack/query/issues?per_page=25",
        "https://api.github.com/repos/facebookexperimental/Recoil/issues?per_page=25",
        "https://api.github.com/repos/microsoft/TypeScript/issues?per_page=25",
    ];
    const repoName = ["react-hook-form", "TanStack", "facebookexperimental", "microsoft"];

    const newData = await Promise.all(
        apiUrl.map(async (item, i) => {
            const response = await (await fetch(`${item}`)).json();
            const newRes = response.map((item) => ({ ...item, name: repoName[i] }))
            return [
                ...newRes
            ]
        })
    )

    return newData.flat();
};
export const fetchGetUserRepositories = async () => {
    const userName = "peacemaker474"; // 자주 가는 Github 사용자 이름 입력

    const response = await (
        await fetch(`https://api.github.com/users/${userName}/repos`)
    ).json();

    return response;
};

export const fetchGetRepoIssues = async () => {
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

export const getRegisterData = () => {
    return JSON.parse(localStorage.getItem("repo"));
}

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
}

export const removeReposData = (value) => {
    const getRepos = getRegisterData();
    let removeRepos = getRepos.filter((item) => String(item.id) !== String(value));

    if (window.confirm("정말로 삭제하시겠습니까?")) {
        localStorage.setItem("repo", JSON.stringify(removeRepos));
    }
}
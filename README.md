### Intro

Github Open API를 통한 Repository 검색 기능을 구현했다.
자신이 원하는 유저의 Repository를 검색할 수 있으며, 관심이 있는 Repository를 localStorage에 저장할 수 있다.
저장된 Repositories의 Issue를 한 곳에서 모아 볼 수 있다.

단순한 검색 기능을 구현하기 위해 시도했기에, 유저를 따로 설정하기 위해서는 api.js에 userName을 변경해야 된다.
추후에는 https://api.github.com/users/{username}/followers를 통한 현재 유저가 팔로워한 유저 목록을 가지고 오고,
원하는 유저의 repository를 검색할 수 있게끔 구현할 예정이다.
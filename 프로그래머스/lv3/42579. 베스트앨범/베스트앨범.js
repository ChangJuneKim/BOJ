function solution(genres, plays) {
    const map = genres.reduce((acc, genre, idx) => {
        if (!acc[genre]) {
            acc[genre] = {
                totalPlay: 0,
                songs: []
            };
        }
        acc[genre].totalPlay += plays[idx];
        acc[genre].songs.push({ idx, play: plays[idx] });
        return acc;
    }, {});

    // 각 장르별로 노래를 재생 횟수와 고유 번호로 정렬
    for (let genre in map) {
        map[genre].songs.sort((a, b) => b.play - a.play || a.idx - b.idx);
    }


    return Object.values(map)
            .sort((a, b) => b.totalPlay - a.totalPlay)
            .flatMap((genre) => genre.songs.slice(0, 2))
            .map((song) => song.idx);
}

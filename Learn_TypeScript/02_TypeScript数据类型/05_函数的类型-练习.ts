type LyricType = {
  time: number
  text: string
}

// 歌词解析
function parseLyric(lyric: string): LyricType[] {
  const lyrics: LyricType[] = []
  lyrics.push({ time: 111, text: "原来你是我最想留住的小幸运" })
  return lyrics
}

const lyricInfos = parseLyric("dsafsdvdgdfssfghgfd")
for (const item of lyricInfos) {
  console.log(item.time, item.text);
}

export {}
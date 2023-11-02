import songs from './songs.js'

const averageYears = songs.reduce((acc, {year})=> acc +year, 0) / songs.length
export default averageYears;
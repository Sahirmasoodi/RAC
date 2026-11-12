import { pastFootballMatches } from '../data/football';

export function getFootballStats() {
  const outcomes = pastFootballMatches.map(match => {
    const [home, away] = match.result.split('-').map(value => Number(value.trim()));
    return home > away ? 'win' : home < away ? 'loss' : 'draw';
  });
  return {
    played: pastFootballMatches.length,
    wins: outcomes.filter(result => result === 'win').length,
    draws: outcomes.filter(result => result === 'draw').length,
    losses: outcomes.filter(result => result === 'loss').length,
  };
}

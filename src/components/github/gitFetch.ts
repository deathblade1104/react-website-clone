const gitFetch = async (): Promise<Record<string, any>> => {
  const res = await fetch('https://api.github.com/users/deathblade1104');
  return res.json();
}

export default gitFetch;
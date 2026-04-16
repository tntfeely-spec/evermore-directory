export async function POST(request: Request) {
  const { urlList } = await request.json()
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'funeralhomedirectories.com',
      key: '1ff8a742985642ddaa3491165c767c30',
      keyLocation: 'https://funeralhomedirectories.com/1ff8a742985642ddaa3491165c767c30.txt',
      urlList
    })
  })
  return new Response(JSON.stringify({ status: response.status }), { status: 200 })
}

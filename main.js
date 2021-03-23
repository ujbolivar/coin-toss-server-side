document.querySelector('#btn-flip').addEventListener('click', coinToss)

async function coinToss() {
    const toss = 'toss'
    const res = await fetch (`/api?toss=${toss}`)
    const data = await res.json()

    console.log(data);
    document.querySelector('#result').innerText = data.result

}
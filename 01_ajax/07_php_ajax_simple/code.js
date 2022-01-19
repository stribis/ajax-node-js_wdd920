
document.querySelector('.do').addEventListener('click', getData)

async function getData () {
  //console.log('the function is running')

  const response = await fetch('send_data.txt')
  const data = await response.text()

  console.log(data)

}
import './App.css'
import Container from './components/Container/Container.jsx'
import Card from './components/Card/Card.jsx'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {
  const cards = [
    {
      image : "/assets/img/react.svg" ,
      title : "Hello World",
      description : "Mohammad",
      btn : {content: "click me", show: true},
      linkTitle : "read more"
    }, {
      image : "/assets/img/react.svg",
      title : "Mohammad",
      description : "Hello people"
    }, {
      image : "/assets/img/react.svg",
      title : "Mohammad",
      description : "Hello people",
      btn : {content: "click me", show: true},
      linkTitle : "see more"
    }
  ]

  return (
    <>
      <NavBar image="/assets/img/react.svg" items={["contnet", "li", "ul", "home"]} btn= "clicl"/>
      <Container>
        {cards.map((card, index) => {
          return (
            <Card key={index} image= {card.image}
              title= {card.title}
              description= {card.description}
              btn= {card.btn}
              linkTitle = {card.linkTitle}>
                <button style={{display: card.btn?.show}}>{card.btn?.content}</button>
            </Card>
          )
        })}
        {/* <Card image= "/assets/img/react.svg" 
            title= "Hello World"
            description= "Mohammad"
            btn= {{content: "click me", show: true}}>
        </Card>
        <Card image= "/assets/img/vite.svg" 
            title= "Ream Madrid"
            description= "Ramos">
        </Card>
        <Card image= "/assets/img/vite.svg" 
            title= "Ream Madrid"
            description= "Ramos"
            btn= {{content: "the best", show: true}}>
        </Card> */}
      </Container>
    </>
  )
}

export default App

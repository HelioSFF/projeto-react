import './Home.css'
import ButtonJoke from '../../components/ButtomJoke/Buttom'
import Angry from '../../assets/angry.png'

const Home = () => {
    return (
        <section id="center">
            <section id="body">
                <img src={Angry} alt="Angry" className="angry-image" />
                <ButtonJoke />
            </section>
        </section>
    );
}

export default Home;
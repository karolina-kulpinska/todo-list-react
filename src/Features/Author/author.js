import Header from "../../Common/Header";
import Section from "../../Common/Section";
import { Container } from '../../Common/Container';


const Author = () => (
    <Container>
        <Header title="O Autorze" />
        <Section
            title="Karolina Kulpińska"
            body={
                <>
                    Mieszkam w okolicy Nysy. Skończyłam administrację, ale czułam, że <strong>to nie jest moje powołanie</strong>, dlatego zaczęłam kurs Frontend Developer, który bardzo mnie wciągnął.
                    <br />
                    W wolnym czasie lubię czytać książki i uwielbiam też długie spacery z moim psem Lokim (jak już zdołam ściągnąć go z kanapy).
                    <br />
                    Moim celem jest rozwój w kierunku Frontend Developera, a w przyszłości może Fullstacka.
                </>
            }
        />
    </Container>
);

export default Author;
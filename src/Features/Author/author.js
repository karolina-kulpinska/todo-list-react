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
                    Cześć!
                    <br />Mam na imię Karolina i mieszkam w okolicach Nysy. Skończyłam administrację, ale czułam, że to nie jest moje powołanie dlatego zaczęłam kurs Frontend Developer, który bardzo mnie wciągnął.
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
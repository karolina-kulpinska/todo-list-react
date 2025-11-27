import { toAuthor, toTasks } from ".src/routes";
import { List, Item, StyledNavLink, Nav } from "./styled";

const Navigation = () => (
    <Nav>
        <List>
            <Item>
                <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to={toAuthor()}>Autor</StyledNavLink>
            </Item>
        </List>
    </Nav>
);

export default Navigation

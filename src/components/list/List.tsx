import {ListStyled, ListItem, Photo, Name, Value, Description, Button, EmptyList} from "./List.style";
import {Teacher} from "../../@types/teacher";

interface IListProps {
    teacherList: Teacher[]
}

const List = (props: IListProps) => {
    const {teacherList} = props;

    function renderItem(teacher: Teacher) {
        return (
            <ListItem key={teacher.id}>
                <Photo src={teacher.photo}/>

                <div>
                    <Name>{teacher.name}</Name>
                    <Value>R$ {teacher.hourValue} por hora</Value>
                    <Description>{teacher.description}</Description>

                    <Button>Entrar em contato</Button>
                </div>
            </ListItem>
        )
    }


    return (
        <div>
            {teacherList.length > 0 ? (
                <ListStyled>
                    {teacherList.map(renderItem)}
                </ListStyled>
            ) : (
                <EmptyList> Nenhum professor encontrado </EmptyList>
            )}

        </div>
    )
}

export default List;
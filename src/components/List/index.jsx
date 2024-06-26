import { Container } from "./styles";

import { MdAdd } from 'react-icons/md';

import Card from '../Card';

const List = ({ data, index: listIndex }) => {
    return (
        <Container done={data.done}>
            <header>
                <h2>{data.title}</h2>
                {data.creatable && (
                    <button type="button">
                        <MdAdd size={24} color="#FFF" />
                    </button>
                )}
            </header>

            <ul>
                {data.cards?.map((card, index) => (
                <Card
                    key={card.id}
                    listIndex={listIndex}
                    index={index}
                    data={card}
                />
                ))}
            </ul>
        </Container>
    )
}


export default List;
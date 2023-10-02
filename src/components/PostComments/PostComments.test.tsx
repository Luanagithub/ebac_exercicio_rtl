import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Adição do textarea',()=>{
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-tarefa'),{
            target: {
                value: "comentário"
            }
        })
    })
});

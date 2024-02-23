
import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o comentario', () => {
    test('Deve renderizar corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'Primeiro comentário adicionado',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));
    
        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'Segundo comentário adicionado',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        expect(screen.getAllByTestId('comentario')).toHaveLength(2);
    });
});
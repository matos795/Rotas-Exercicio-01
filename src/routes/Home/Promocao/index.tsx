import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField';

export default function Promocao() {
    return(
        <>
            <main>
                <TextField text='Página de promoção' />
                <Link to='/inscricao'>
                    <Button text='Quero participar' />
                </Link>
            </main>
        </>
    );
}
import './BoxShadowOutput.css';

type Props = {
    currOptions: string
}

export const BoxShadowOuput: React.FC<Props> = ({currOptions}) => {
    return (
        <div className='output-container'>
            <textarea cols={40} rows={3} value={currOptions} readOnly className='options-output'></textarea>
        </div>
    )
}
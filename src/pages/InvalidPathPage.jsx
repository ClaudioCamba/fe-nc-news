import ErrorDisplay from '../components/ErrorDisplay.jsx';

const InvalidUrlPage = () =>{
    return (
        <main className='invalid-path-page'>
            <ErrorDisplay type={ 'path' } />
        </main>
    )
}

export default InvalidUrlPage;
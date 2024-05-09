const ErrorDisplay = ({ error = null, type }) => {

    const errorData = {
        path: {
            title: 'Error 404 - Oops!',
            subTitle: 'We cannot find the page you\'re looking for',
            ctaText: 'Back To Home',
            ctaUrl: '/'
        },
        article: {
            title: error?.data?.msg ? `${error.data.msg} - ${error.status}` : 'Oops!',
            subTitle: error?.status === 404 ? 'We cannot find the article/s you\'re looking for' : 'There was a problem getting the article ',
            ctaText: 'Back To Articles',
            ctaUrl: '/articles'
        }
    }

    return (
        <section className='invalid-section'>
            <h1>{errorData[type].title}</h1>
            <h4>{errorData[type].subTitle}</h4>
            <a href={errorData[type].ctaUrl}>{errorData[type].ctaText}</a>
        </section>
    )
}

export default ErrorDisplay;
import React from 'react';

const CookiePolicy = () => {
    return (
        <div className='my-8'>
            <h2 className="text-3xl font-bold text-primary mb-2">Cookie Policy</h2>

            <p>
                This website uses cookies to enhance user experience and to track website usage. Cookies are small text files that are stored on your device when you visit a website.
            </p>
            <p className='my-2'>
                Types of cookies used on this website:
            </p>
            <p className='my-2'>Essential cookies: These cookies are necessary for the website to function properly and cannot be turned off in our systems. They are usually set only in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.
            </p>
            <p className='my-2'>Analytical/performance cookies: These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
            </p>
            <p className='my-2'>Targeting cookies: These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant ads on other sites.
            </p>
            <p className='my-2'>By using this website, you consent to the use of these cookies as outlined in this Cookie Policy. You can manage your cookie preferences through your browser settings or by using opt-out mechanisms provided by third-party analytics providers.
            </p>
            <p className='my-2'>Note that disabling certain cookies may affect the functionality of this website.
            </p>
        </div>
    );
};

export default CookiePolicy;
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className='my-8 p-8'>
            <h2 className="text-3xl font-bold text-primary mb-2">Privacy Policy</h2>

            <p>
                NR International values the privacy of its users and is committed to protecting their personal information. This Privacy Policy explains how NR International collects, uses, and protects personal information obtained through its website.
            </p>
            <p className='my-2'>
                Information Collection and Use:
                NR International collects personal information such as name, email address, phone number, and address when users submit a query or request through the contact form. This information is used solely to respond to the user's query or request.
            </p>
            <p className='my-2'>
                Information Sharing:
                NR International does not sell or share personal information with third parties unless required by law or to protect the rights, property, or safety of NR International or its users.
            </p>
            <p className='my-2'>
                Security:
                NR International takes all reasonable steps to protect personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <p className='my-2'>
                Links to Other Sites:
                The NR International website may contain links to other sites that are not operated by NR International. Users are advised to review the privacy policies of those sites as NR International has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party sites.
            </p>
            <p className='my-2'>Changes to this Policy:
                NR International reserves the right to modify this Privacy Policy at any time. Users are encouraged to review this page periodically for any changes. By using the NR International website, users agree to this Privacy Policy.
            </p>
            <p className='my-2'>Contact Us:
                If you have any questions or concerns about this Privacy Policy, please <Link to="/contact-us">contact us</Link>
            </p>
        </div>
    );
};

export default PrivacyPolicy;
const nodemailer = require('nodemailer');
const companyEmail = process.env.COMPANY_EMAIL;
const MailPassword = process.env.MAIL_PASSWORD;

exports.mailCareerCounselling = async (req, res) => {
    try {
        const {name, email , phoneNumber, prefferedLanguage, experienceLevel, message} = req.body
        
        // Validate required fields
        if (!name || !email || !phoneNumber || !prefferedLanguage || !experienceLevel || !message) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        } 

        //configure nodemailer 
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: companyEmail,
                pass: MailPassword
            }
        })

        // Email to admin
        const adminMailOptions = {
            from: email,
            to: companyEmail,
            subject: 'New Career Counselling Request',
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Career Counselling Request</title>
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        
                        body {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            background-color: #f4f4f4;
                        }
                        
                        .email-container {
                            max-width: 600px;
                            margin: 20px auto;
                            background: white;
                            border-radius: 10px;
                            box-shadow: 0 0 20px rgba(0,0,0,0.1);
                            overflow: hidden;
                        }
                        
                        .header {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            padding: 30px 20px;
                            text-align: center;
                        }
                        
                        .header h1 {
                            font-size: 24px;
                            margin-bottom: 10px;
                            font-weight: 600;
                        }
                        
                        .header p {
                            font-size: 16px;
                            opacity: 0.9;
                        }
                        
                        .content {
                            padding: 30px;
                        }
                        
                        .info-grid {
                            display: grid;
                            gap: 15px;
                            margin-bottom: 25px;
                        }
                        
                        .info-item {
                            background: #f8f9fa;
                            padding: 15px;
                            border-radius: 8px;
                            border-left: 4px solid #667eea;
                        }
                        
                        .info-label {
                            font-weight: 600;
                            color: #495057;
                            font-size: 14px;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                            margin-bottom: 5px;
                        }
                        
                        .info-value {
                            font-size: 16px;
                            color: #333;
                            word-wrap: break-word;
                        }
                        
                        .message-section {
                            background: #fff3cd;
                            border: 1px solid #ffeaa7;
                            border-radius: 8px;
                            padding: 20px;
                            margin-top: 20px;
                        }
                        
                        .message-section h3 {
                            color: #856404;
                            margin-bottom: 10px;
                            font-size: 18px;
                        }
                        
                        .timestamp {
                            text-align: center;
                            margin-top: 25px;
                            padding-top: 20px;
                            border-top: 1px solid #e9ecef;
                            color: #6c757d;
                            font-size: 14px;
                        }
                        
                        .priority-badge {
                            display: inline-block;
                            background: #dc3545;
                            color: white;
                            padding: 5px 12px;
                            border-radius: 20px;
                            font-size: 12px;
                            font-weight: 600;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <h1>🎯 New Career Counselling Request</h1>
                            <p>A new inquiry has been submitted</p>
                            <span class="priority-badge">Action Required</span>
                        </div>
                        
                        <div class="content">
                            <div class="info-grid">
                                <div class="info-item">
                                    <div class="info-label">👤 Full Name</div>
                                    <div class="info-value">${name}</div>
                                </div>
                                
                                <div class="info-item">
                                    <div class="info-label">📧 Email Address</div>
                                    <div class="info-value">${email}</div>
                                </div>
                                
                                <div class="info-item">
                                    <div class="info-label">📱 Phone Number</div>
                                    <div class="info-value">${phoneNumber}</div>
                                </div>
                                
                                <div class="info-item">
                                    <div class="info-label">🌐 Preferred Language</div>
                                    <div class="info-value">${prefferedLanguage}</div>
                                </div>
                                
                                <div class="info-item">
                                    <div class="info-label">📈 Experience Level</div>
                                    <div class="info-value">${experienceLevel}</div>
                                </div>
                            </div>
                            
                            <div class="message-section">
                                <h3>💬 Message</h3>
                                <p>${message}</p>
                            </div>
                            
                            <div class="timestamp">
                                <strong>Submitted on:</strong> ${new Date().toLocaleString()}
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `
        };

        // Email to user (confirmation)
        const userMailOptions = {
            from: companyEmail,
            to: email,
            subject: 'Career Counselling Request Received - CodeForge',
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Request Confirmation</title>
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        
                        body {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            background-color: #f4f4f4;
                        }
                        
                        .email-container {
                            max-width: 600px;
                            margin: 20px auto;
                            background: white;
                            border-radius: 10px;
                            box-shadow: 0 0 20px rgba(0,0,0,0.1);
                            overflow: hidden;
                        }
                        
                        .header {
                            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                            color: white;
                            padding: 40px 20px;
                            text-align: center;
                        }
                        
                        .header h1 {
                            font-size: 28px;
                            margin-bottom: 10px;
                            font-weight: 600;
                        }
                        
                        .header p {
                            font-size: 18px;
                            opacity: 0.9;
                        }
                        
                        .content {
                            padding: 40px 30px;
                        }
                        
                        .greeting {
                            font-size: 18px;
                            margin-bottom: 20px;
                            color: #495057;
                        }
                        
                        .confirmation-message {
                            background: #d4edda;
                            border: 1px solid #c3e6cb;
                            border-radius: 8px;
                            padding: 20px;
                            margin-bottom: 30px;
                            text-align: center;
                        }
                        
                        .confirmation-message h2 {
                            color: #155724;
                            margin-bottom: 10px;
                            font-size: 20px;
                        }
                        
                        .confirmation-message p {
                            color: #155724;
                            font-size: 16px;
                        }
                        
                        .details-section {
                            background: #f8f9fa;
                            border-radius: 10px;
                            padding: 25px;
                            margin-bottom: 30px;
                        }
                        
                        .details-section h3 {
                            color: #495057;
                            margin-bottom: 20px;
                            font-size: 18px;
                            text-align: center;
                        }
                        
                        .detail-row {
                            display: flex;
                            justify-content: space-between;
                            padding: 10px 0;
                            border-bottom: 1px solid #e9ecef;
                        }
                        
                        .detail-row:last-child {
                            border-bottom: none;
                        }
                        
                        .detail-label {
                            font-weight: 600;
                            color: #6c757d;
                            flex: 1;
                        }
                        
                        .detail-value {
                            flex: 2;
                            text-align: right;
                            color: #495057;
                        }
                        
                        .next-steps {
                            background: #fff3cd;
                            border: 1px solid #ffeaa7;
                            border-radius: 8px;
                            padding: 20px;
                            margin-bottom: 30px;
                        }
                        
                        .next-steps h3 {
                            color: #856404;
                            margin-bottom: 15px;
                            font-size: 18px;
                        }
                        
                        .next-steps ul {
                            color: #856404;
                            padding-left: 20px;
                        }
                        
                        .next-steps li {
                            margin-bottom: 8px;
                        }
                        
                        .contact-info {
                            text-align: center;
                            background: #e3f2fd;
                            border-radius: 8px;
                            padding: 20px;
                            margin-bottom: 30px;
                        }
                        
                        .contact-info h3 {
                            color: #1565c0;
                            margin-bottom: 10px;
                        }
                        
                        .contact-info p {
                            color: #1976d2;
                            margin-bottom: 5px;
                        }
                        
                        .footer {
                            text-align: center;
                            padding-top: 20px;
                            border-top: 1px solid #e9ecef;
                            color: #6c757d;
                        }
                        
                        .footer h3 {
                            color: #495057;
                            margin-bottom: 10px;
                        }
                        
                        .checkmark {
                            display: inline-block;
                            width: 60px;
                            height: 60px;
                            background: #28a745;
                            border-radius: 50%;
                            margin-bottom: 20px;
                            position: relative;
                        }
                        
                        .checkmark::after {
                            content: '✓';
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            color: white;
                            font-size: 30px;
                            font-weight: bold;
                        }
                        
                        @media (max-width: 600px) {
                            .detail-row {
                                flex-direction: column;
                            }
                            
                            .detail-value {
                                text-align: left;
                                margin-top: 5px;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <div class="checkmark"></div>
                            <h1>Request Confirmed!</h1>
                            <p>We've received your career counselling request</p>
                        </div>
                        
                        <div class="content">
                            <div class="greeting">
                                Dear <strong>${name}</strong>,
                            </div>
                            
                            <div class="confirmation-message">
                                <h2>🎉 Thank you for reaching out!</h2>
                                <p>Your career counselling request has been successfully submitted and our expert team will review it shortly.</p>
                            </div>
                            
                            <div class="details-section">
                                <h3>📋 Your Submission Details</h3>
                                <div class="detail-row">
                                    <span class="detail-label">Name:</span>
                                    <span class="detail-value">${name}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Email:</span>
                                    <span class="detail-value">${email}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Phone:</span>
                                    <span class="detail-value">${phoneNumber}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Language:</span>
                                    <span class="detail-value">${prefferedLanguage}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Experience:</span>
                                    <span class="detail-value">${experienceLevel}</span>
                                </div>
                            </div>
                            
                            <div class="next-steps">
                                <h3>🚀 What Happens Next?</h3>
                                <ul>
                                    <li>Our career counselling team will review your request within 24-48 hours</li>
                                    <li>You'll receive a personalized response via email or phone</li>
                                    <li>We'll schedule a convenient time for your counselling session</li>
                                    <li>Prepare any questions you'd like to discuss during the session</li>
                                </ul>
                            </div>
                            
                            <div class="contact-info">
                                <h3>📞 Need Immediate Assistance?</h3>
                                <p>If you have urgent queries, please don't hesitate to contact us directly.</p>
                                <p>We're here to help you succeed in your career journey!</p>
                            </div>
                            
                            <div class="footer">
                                <h3>Best regards,</h3>
                                <p><strong>CodeForge Team</strong></p>
                                <p style="margin-top: 15px; font-size: 12px;">
                                    This email was sent on ${new Date().toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `
        };

        // Send emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(200).json({
            success: true,
            message: 'Career counselling request submitted successfully. We will get back to you soon!'
        });
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}
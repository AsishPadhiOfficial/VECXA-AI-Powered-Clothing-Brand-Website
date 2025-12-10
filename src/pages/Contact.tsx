
import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

const Contact = () => {
    return (
        <PageLayout showContact={false}>
            <SEO
                title="Contact Us | VECXA"
                description="Get in touch with the VECXA team for your sensor solution needs."
            />
            <div className="pt-24 min-h-screen">
                <ContactForm />
            </div>
        </PageLayout>
    );
};

export default Contact;

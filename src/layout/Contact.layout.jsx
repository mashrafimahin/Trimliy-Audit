// icon
import { MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// layouts
import CommonHero from "./CommonHero.layout";
// components
import Button from "../components/Button";
import FeaturesCard from "../components/FeaturesCard";
// data
import { info as data } from "../static/Contact.info";
import FAQ from "../components/FAQ";
import Input from "../components/Input";
import { useState } from "react";

// main
function ContactLayout() {
  // state
  const [isLoading, setIsLoading] = useState(false);
  const [formInfo, setFormInfo] = useState({
    fullName: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  // handle form info
  const handleFormInfoChange = (event) => {
    setFormInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // checkpoint
    if (
      formInfo.fullName.trim() === "" &&
      formInfo.email.trim() === "" &&
      formInfo.subject.trim() === "" &&
      formInfo.company.trim() === "" &&
      formInfo.message.trim() === ""
    ) {
      alert("You must fill the input fields.");
      setIsLoading(false);
      return;
    }
    console.log(formInfo);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <CommonHero
        headerTitle={data.title}
        headerDescription={data.description}
      />

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* left side */}
            <div>
              <Header variant={"h3"}>Send Us a Message</Header>
              <Paragraph variant={"small"}>
                Fill out the form below and our team will get back to you within
                24 hours. We're excited to hear from you and assist with any
                inquiries.
              </Paragraph>

              <div className="relative rounded-2xl overflow-hidden group border border-white/10 mt-10 p-1">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 opacity-50"></div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                  alt="Contact Dashboard Preview"
                  className="relative w-full h-auto rounded-xl opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 object-cover"
                />
              </div>
            </div>

            {/* right form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-tr from-blue-600/10 to-purple-600/10 blur-3xl rounded-3xl -z-10"></div>
              <div className="p-8 backdrop-blur-xl bg-navy-900/80 border-white/10">
                {/* form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* fullName */}
                    <div className="space-y-2 relative group">
                      <label className="text-md font-medium text-slate-300">
                        Full Name
                      </label>
                      <Input
                        type={"text"}
                        name={"fullName"}
                        value={formInfo.fullName}
                        setValue={handleFormInfoChange}
                        placeholder={"John Doe"}
                        className={"mt-2"}
                        required
                      />
                    </div>
                    {/* email */}
                    <div className="space-y-2 relative group">
                      <label className="text-md font-medium text-slate-300">
                        Email Address
                      </label>
                      <Input
                        type={"email"}
                        name={"email"}
                        value={formInfo.email}
                        setValue={handleFormInfoChange}
                        placeholder={"john@example.com"}
                        className={"mt-2"}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* subject */}
                    <div className="space-y-2 relative group">
                      <label className="text-md font-medium text-slate-300">
                        Subject
                      </label>
                      <Input
                        type={"text"}
                        name={"subject"}
                        value={formInfo.subject}
                        setValue={handleFormInfoChange}
                        placeholder={"How can we help?"}
                        className={"mt-2"}
                        required
                      />
                    </div>
                    {/* company */}
                    <div className="space-y-2 relative group">
                      <label className="text-md font-medium text-slate-300">
                        Company (optional)
                      </label>
                      <Input
                        type={"text"}
                        name={"company"}
                        value={formInfo.company}
                        setValue={handleFormInfoChange}
                        placeholder={"Your company"}
                        className={"mt-2"}
                      />
                    </div>
                  </div>

                  {/* message */}
                  <div className="space-y-2 relative group">
                    <label className="text-md font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formInfo.message}
                      onChange={(e) => handleFormInfoChange(e)}
                      className="mt-2 w-full border border-gray-100/16 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-white transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className={isLoading ? "bg-blue-900 cursor-no-drop" : ""}
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-24 bg-navy-950/50 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Header variant={"h3"}>{data.supportTeams.title}</Header>
            <Paragraph variant={"small"}>{data.supportTeams.para}</Paragraph>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.supportTeams.cards.map((option, i) => (
              <FeaturesCard key={i} data={option} theme={"text-blue-400"} />
            ))}
          </div>
        </div>
      </section>

      {/* Map / Location & Response Time */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Location */}
            <div>
              <Header variant={"h3"}>Our Headquarters</Header>
              <div className="overflow-hidden p-1 bg-navy-900 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                <div className="w-full h-64 bg-navy-950 relative rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950 to-transparent z-10"></div>
                  <div className="z-20 text-center p-6 bg-navy-900/80 backdrop-blur-md rounded-2xl border border-white/10">
                    <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h4 className="text-white font-bold text-lg mb-1">
                      {data.address.company}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {data.address.location[0]}
                      <br />
                      {data.address.location[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time & Stats */}
            <div className="space-y-6">
              <Header variant={"h3"}>World-Class Support</Header>
              <Header variant={"small"}>
                We pride ourselves on providing lightning-fast, helpful
                responses to ensure your link operations never miss a beat.
              </Header>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-navy-900/50 border-white/10">
                  <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 mb-2">
                    &lt; 2h
                  </h4>
                  <p className="text-slate-300 font-medium">
                    Average Response Time
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    For standard support queries
                  </p>
                </div>
                <div className="p-6 bg-navy-900/50 border-white/10">
                  <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 mb-2">
                    24/7
                  </h4>
                  <p className="text-slate-300 font-medium">
                    Enterprise Availability
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    Dedicated priority queues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-navy-950/30 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <Header variant={"h3"}>Frequently Asked Questions</Header>
            <Paragraph variant={"small"}>
              Quick answers to common inquiries before you reach out.
            </Paragraph>
          </div>

          <div className="space-y-4">
            {data.FAQ.map((faq, i) => (
              <FAQ key={i} data={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Connection Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Header variant={"h3"}>Join Our Community</Header>
          <div className="flex flex-wrap justify-center gap-4">
            {data.social.map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-14 h-14 rounded-full bg-navy-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 cursor-pointer"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactLayout;

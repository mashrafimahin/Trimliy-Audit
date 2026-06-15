// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icons
import {
  Shield,
  Calendar,
  Mail,
  Lock,
  AlertCircle,
  FileCheck,
} from "lucide-react";
// layouts
import CTA from "./CTA.layout";
// components
import FAQ from "../components/FAQ";
import FeaturesCard from "../components/FeaturesCard";
import MinimalisticCard from "../components/MinimalisticCard";
// data
import { info as data } from "../static/Privacy.info";

function PrivacyLayout() {
  return (
    <div className="flex flex-col relative z-10">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 relative overflow-hidden">
        {/* decorations */}
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-[30%] right-[10%] w-[20%] h-[30%] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

        {/* headings */}
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div>
            <Header variant={"h2"}>
              {data.title[0]}
              <span className="gradient-text">{data.title[1]}</span>
            </Header>
            <Paragraph variant={"small"}>{data.description}</Paragraph>
          </div>
        </div>
      </section>

      {/* Last Updated Section */}
      <section className="pb-16 relative z-10">
        <div className="container mx-auto max-w-4xl px-6">
          <div>
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-navy-900/50 border-white/5 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Last Updated</p>
                  <p className="text-sm text-slate-400">{data.lastUpdate}</p>
                </div>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <span className="text-slate-500 block mb-1">
                    Effective Date
                  </span>
                  <span className="text-slate-300 font-medium">
                    {data.lastUpdate}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Version</span>
                  <span className="text-slate-300 font-medium">
                    {data.version}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto max-w-4xl px-6 pb-24 relative z-10">
        <div className="space-y-24">
          {/* Introduction Section */}
          <section className="relative">
            <div>
              <Header variant={"h3"}>Introduction</Header>
              <div className="text-slate-300 text-lg leading-relaxed space-y-4">
                <Paragraph variant={"small"}>
                  Trimliy respects your privacy and is committed to protecting
                  the personal information you share with us. We believe in{" "}
                  <strong className="text-white">transparency</strong>,
                  responsible data usage, and maintaining a{" "}
                  <strong className="text-white">secure infrastructure</strong>.
                </Paragraph>
                <Paragraph variant={"small"}>
                  This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website or
                  use our smart link management platform. We operate with a{" "}
                  <strong className="text-white">compliance mindset</strong> to
                  ensure your data protection rights are upheld.
                </Paragraph>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <Header variant={"h3"}>Information We Collect</Header>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.infoCards.map((item, i) => (
                <FeaturesCard key={i} data={item} theme={"text-blue-400"} />
              ))}
            </div>
          </section>

          {/* How We Use Your Data */}
          <section>
            <Header variant={"h3"}>How We Use Your Data</Header>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {data.dataCards.map((use, i) => (
                <MinimalisticCard key={i} data={use} theme={"blue"} />
              ))}
            </div>
          </section>

          {/* Data Protection & Security */}
          <section>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-blue-600/50 to-purple-600/50"></div>
              <div className="relative bg-navy-950 rounded-3xl p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                  <div className="w-32 h-32 shrink-0 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                    <div className="relative h-full w-full bg-navy-900 border border-blue-500/30 rounded-full flex items-center justify-center">
                      <Lock className="w-12 h-12 text-blue-400" />
                    </div>
                  </div>

                  <div>
                    <Header variant={"h3"}>Data Protection & Security</Header>
                    <Paragraph variant={"small"}>
                      We implement enterprise-grade security measures to
                      maintain the safety of your personal information.
                    </Paragraph>
                    <ul className="space-y-3">
                      {data.protectionService.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-slate-400"
                        >
                          <Shield className="w-5 h-5 text-purple-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies Policy Section */}
          <section>
            <Header variant={"h3"} className="mb-2">
              Cookies Policy
            </Header>
            <Paragraph variant={"small"}>
              We use cookies to improve your experience, manage sessions, and
              track how our platform is used.
            </Paragraph>

            <div className="space-y-4">
              {data.cookieInfo.map((cookie) => (
                <FAQ data={cookie} />
              ))}
            </div>
          </section>

          {/* user Rights Section */}
          <section>
            <Header variant={"h3"}>Your Data Rights</Header>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.userRights.map((right, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-navy-900/50 border border-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <FileCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300 font-medium">{right}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Data Retention & Children */}
          <div className="grid md:grid-cols-2 gap-8">
            <section>
              <div className="p-8 h-full bg-navy-900/30">
                <Header variant={"h3"}>Data Retention</Header>
                <Paragraph variant={"small"} className={"text-md"}>
                  We retain your information only as long as necessary to
                  provide our services. Link analytics data is stored according
                  to your subscription plan.
                </Paragraph>
                <Paragraph variant={"small"} className={"text-md"}>
                  Upon account deletion, all associated personal data is
                  permanently removed within 30 days.
                </Paragraph>
              </div>
            </section>

            <section>
              <div className="p-8 h-full bg-navy-900/30">
                <Header variant={"h3"}>Children's Privacy</Header>
                <Paragraph variant={"small"} className={"text-md"}>
                  Trimliy is not intended for use by children under the age of
                  16. We do not knowingly collect personal data from minors. If
                  we become aware that a child has provided us with personal
                  information, we take steps to delete it.
                </Paragraph>
              </div>
            </section>
          </div>

          {/* Policy Changes */}
          <section>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-blue-900/10 border border-blue-500/20">
              <AlertCircle size={32} className="text-blue-400 shrink-0 mt-1" />
              <div>
                <Header variant={"h3"}>Policy Changes</Header>
                <Paragraph variant={"small"}>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any significant changes by posting the new
                  policy on this page and updating the "Last Updated" date.
                  Continued use of Trimly constitutes your acknowledgment of
                  these changes.
                </Paragraph>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="p-10 text-center relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/2 pointer-events-none"></div>
              <Header variant={"h3"}>Have Questions?</Header>
              <Paragraph variant={"small"} className={"mx-12"}>
                If you have any questions or concerns about this Privacy Policy
                or our data practices, our support team is ready to help. We
                typically respond within 24 hours.
              </Paragraph>
              <a
                href={data.mail}
                className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors bg-blue-500/10 px-6 py-3 rounded-full"
              >
                <Mail className="w-5 h-5" />
                {data.mail.split(":")[1]}
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <CTA
        title={"Your Trust Powers Trimliy"}
        description={
          "Continue using our platform confidently, knowing your data is handled responsibly and securely."
        }
        buttonOne={"Back to home"}
        buttonOneLink={""}
        buttonTwo={"Contact Support"}
        buttonTwoLink={"contact"}
      />
    </div>
  );
}

export default PrivacyLayout;

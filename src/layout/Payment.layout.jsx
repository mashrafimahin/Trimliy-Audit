// dependencies
import { useSlices } from "../hooks/useSlices";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// components
import Button from "../components/Button";
// icons
import { CheckCircle2, CreditCard, Download } from "lucide-react";

// main
const Payment = () => {
  // state
  const { data } = useSlices("billingData");

  return (
    <div className="space-y-6">
      {/* header */}
      <div>
        <Header variant={"h3"}>Billing & Plans</Header>
        <Paragraph variant={"small"} className={"-mt-2.5"}>
          Manage your subscription, billing details, and view invoices.
        </Paragraph>
      </div>

      {/* info */}
      <div className="grid md:grid-cols-[360px_1fr] gap-6">
        {/* card */}
        <div className="p-6 bg-slate-900 rounded-lg">
          {/* head */}
          <div className="flex items-start gap-3 mb-2">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex flex-col">
              <Header variant={"h3"} className={"text-lg leading-tight mb-0"}>
                Current Plan
              </Header>
              <Paragraph variant={"small"} className={"leading-snug"}>
                {data.details.type}
              </Paragraph>
            </div>
          </div>
          {/* costs */}
          <div className="mb-6 pb-6 border-b border-white/5">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-3xl font-bold text-white">
                ${data.details.cost}
              </span>
              <span className="text-slate-400 mb-1">/month</span>
            </div>
            <Paragraph variant={"small"} className="text-sm mb-0">
              Next billing date: {data.details.nextBillingDate}
            </Paragraph>
          </div>
          {/* features */}
          <div className="space-y-3 mb-6">
            {data.details.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                {feature}
              </div>
            ))}
          </div>
          {/* actions */}
          <div className="flex gap-3">
            <Button className={"flex-1"}>Upgrade</Button>
          </div>
        </div>
        {/* more info */}
        <div className="space-y-6">
          {/* payment method */}
          <div className="p-6">
            <Header variant={"h3"} className={"text-lg"}>
              Payment Method
            </Header>
            <div className="flex items-center justify-between p-4 bg-navy-900 rounded-lg border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center text-xs font-bold text-white border border-white/10">
                  {data.details.card || "CARD"}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    ****** {data.details.cardLastDigit || ""}
                  </p>
                  <p className="text-xs text-slate-400">
                    Expires {data.details.expiryDate || "--"}
                  </p>
                </div>
              </div>
              <Button className={"w-auto"}>Edit</Button>
            </div>
          </div>
          {/* payment history */}
          <div className="p-6">
            <Header variant={"h3"} className={"text-lg"}>
              Billing History
            </Header>
            <div className="space-y-4">
              {data.details.paymentHistory.length === 0 ? (
                <div className="text-slate-400">
                  No payment history available.
                </div>
              ) : (
                data.details.paymentHistory.map((invoice, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">
                        {invoice.date}
                      </p>
                      <p className="text-xs text-emerald-400">
                        {invoice.status}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-white">
                        {invoice.amount}
                      </span>
                      <Button variant={"regular"} className={"w-auto"}>
                        <Download size={14} />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import { BarChart3, Activity, ShieldCheck, Clock3, Gauge, TrendingUp, ArrowRight, Zap, Database, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const metrics = [
  {
    label: "Incident reduction",
    value: "58%",
    detail: "Average injury reduction from pilot programs within 90 days",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />
  },
  {
    label: "Real-time coverage",
    value: "24/7",
    detail: "Continuous monitoring with automatic anomaly detection and alerts",
    icon: <Clock3 className="w-6 h-6 text-blue-500" />
  },
  {
    label: "Signal fidelity",
    value: "97.8%",
    detail: "Validated sensor accuracy across temperature, motion, and pressure inputs",
    icon: <Gauge className="w-6 h-6 text-purple-500" />
  },
  {
    label: "Time-to-insight",
    value: "< 5 min",
    detail: "From on-body event to dashboard notification with correlation context",
    icon: <Zap className="w-6 h-6 text-amber-500" />
  }
];

const pipelineSteps = [
  { title: "Capture", detail: "On-body textile sensors stream multi-signal data at 100Hz" },
  { title: "Enrich", detail: "Edge normalization plus cloud inference models" },
  { title: "Surface", detail: "Role-based dashboards, alerts, and exports" },
  { title: "Act", detail: "Automations and guided playbooks to resolve events" }
];

const AnalyticsShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-24 w-full relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -left-20 top-40 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-40 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/5 border border-gray-900/10 text-gray-800 text-sm font-medium mb-6"
          >
            <Activity className="w-4 h-4" />
            <span>Decision-Grade Analytics</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
          >
            From textile signals to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
              actions you can measure
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We don’t stop at hardware—our platform instruments every stitch with analytics that operators, coaches, and safety leaders can act on immediately.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                  {metric.icon}
                </div>
                {idx === 0 && (
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                )}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                {metric.value}
              </div>
              <div className="font-medium text-gray-900 mb-2">{metric.label}</div>
              <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-[#0A0A0A] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden group"
          >
            {/* Dark Card Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-4 bg-blue-500 rounded-full" />
                    <p className="text-sm font-medium tracking-wider uppercase text-gray-400">Signal Intelligence</p>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Live telemetry <span className="text-gray-500 mx-2">→</span> correlated insights
                  </h3>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                  <Database className="w-7 h-7 text-blue-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {pipelineSteps.map((step, idx) => (
                  <div key={step.title} className="bg-white/5 border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-[10px] font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-white">{step.title}</span>
                    </div>
                    <p className="text-sm text-gray-400 pl-9">{step.detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "SOC alerts", "Athlete readiness", "Quality drift",
                  "Process compliance", "Fatigue detection", "Heat exposure"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-200/50 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6">
                <TrendingUp className="w-3 h-3" />
                <span>Outcomes you can track</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Analytics you can defend in the boardroom
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Tie textile telemetry to outcomes: downtime avoided, recovery speed, SLA adherence, and safety incidents prevented.
              </p>

              <ul className="space-y-4">
                {[
                  "ROI-ready reporting packs with exportable datasets",
                  "Operator-friendly alerts with context and next actions",
                  "Privacy-first data paths with least-privilege access"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="mt-1 min-w-[20px]">
                      {i === 2 ? <Lock className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" /> :
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-600 group-hover:bg-white transition-colors" />
                        </div>
                      }
                    </div>
                    <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-gray-500">
                Ready to see it live?
              </span>
              <Button
                onClick={() => {
                  const contact = document.getElementById("contact");
                  if (contact) contact.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gray-900 hover:bg-black text-white px-6 rounded-xl group"
              >
                Book a demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsShowcase;

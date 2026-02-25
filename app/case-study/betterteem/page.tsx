import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="max-w-3xl mx-auto py-20 flex flex-col gap-10">
      <h1 className="text-4xl">Betterteem — UX Improvement Case Study</h1>

      <h2 className="text-2xl">Context</h2>
      <p>
        Betterteem is an early-warning tool for employee resignation platform
        where I handled both UI design and frontend implementation.
      </p>

      <h2 className="text-2xl">Problem</h2>
      <p>
        {`The original "Employee Experience" chart looked okay at first glance,
        but it failed as a functional tool for HR managers:`}
      </p>

      <ul className="flex flex-col gap-2">
        <li>
          <b>Data in a Vacuum:</b>{" "}
          {`A
        score of 3.58 doesn't tell a story. Without a goal or industry standard,
        the user has no idea if they are succeeding or failing. `}
        </li>
        <li>
          <b>Visual Noise:</b>{" "}
          {`Thick bars and large icons made the UI feel
          "heavy." It was hard to scan 10+ metrics quickly to find the most
          urgent issues.`}
        </li>
        <li>
          <b>Low Information Density:</b>{" "}
          {`The layout wasted a lot of horizontal
          space that could have been used for comparative data.`}
        </li>
      </ul>

      <h2 className="text-2xl">Sample Redesigned Feature</h2>
      <div className="px-10">
        <h3 className="text-xl font-semibold">Before</h3>
        <Image
          src="/works/betterteem/before.png"
          alt="Redesign of Betterteem's interface"
          width={800}
          height={400}
        />
        <h3 className="text-xl font-semibold">After</h3>
        <Image
          src="/works/betterteem/after.png"
          alt="Redesign of Betterteem's interface"
          width={800}
          height={400}
        />
      </div>

      <h2 className="text-2xl">Key Decisions</h2>
      <p>
        {`I shifted the design from "What is the number?" to "How are we doing compared to our goal?"`}
      </p>

      <ul className="flex flex-col gap-2">
        <li>
          <b>Introduced Benchmarking:</b>{" "}
          {`Added a "vs Benchmark" column so every score has a point of reference.`}
        </li>
        <li>
          <b>Functional Color System:</b>{" "}
          {`I moved away from decorative colors to a "Traffic Light" logic (Above, Warning, Critical). The color now signals the health of the metric, not just the value.`}
        </li>
        <li>
          <b>Refined Typography & Layout:</b>{" "}
          {`Swapped heavy bars for slim line indicators and moved numerical data to a clean table-like structure on the right for better vertical scannability.`}
        </li>
      </ul>

      <h2 className="text-2xl">Implementation</h2>
      <p>
        {`From a UI and Development perspective, I focused on scalability:`}
      </p>

      <ul className="flex flex-col gap-2">
        <li>
          <b>Dynamic Component Logic:</b>{" "}
          {`Designed the bars as a reusable component where the "fill" and the "benchmark marker" are positioned based on a 0-5 scale ratio.`}
        </li>
        <li>
          <b>Conditional Styling:</b>{" "}
          {`The component color isn't hardcoded; it’s triggered by the delta between the Global Score and the Benchmark.`}
        </li>
        <li>
          <b>Edge Case Handling:</b>{" "}
          {`I accounted for "Null" states (seen in the bottom rows) to ensure the layout doesn't break when data is missing—a common reality in live apps.`}
        </li>
      </ul>

      <h2 className="text-2xl">Outcome</h2>
      <p>
        {`The redesign transformed a static chart into a decision-making dashboard.`}
      </p>

      <ul className="flex flex-col gap-2">
        <li>
          <b>Reduced Cognitive Load:</b>{" "}
          {`Users can now identify "Critical" organizational risks in under 5 seconds.`}
        </li>
        <li>
          <b>Improved Clarity:</b>{" "}
          {`By providing context (benchmarks), the data became actionable for stakeholders, moving the tool from a "nice-to-have" visual to a mission-critical reporting asset.`}
        </li>
      </ul>
    </main>
  );
};

export default page;

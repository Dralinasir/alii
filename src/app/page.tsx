export default function Home() {
  return (
 <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-30 h-30 rounded-full mx-auto" src="/image-2.jpeg" alt="" width="400" height="550"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        ali nasir
      </div>
      <div>
        Student
      </div>
    </figcaption>
  </div>
</figure>
  );
}
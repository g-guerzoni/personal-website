export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md">
      <div className="flex flex-col items-center gap-8">
        {/* Header */}
        <div>Header</div>

        {/* Profile */}
        <div className="flex items-center gap-4">
          <div>Avatar</div>

          <div>
            <div>Name</div>

            <div>Bio</div>
          </div>
        </div>

        {/* Section Projects */}
        <div>Projects</div>

        {/* Section Timeline */}
        <div>Timeline</div>
      </div>
    </div>
  );
}

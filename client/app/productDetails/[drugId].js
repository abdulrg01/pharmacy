import CourseDetailsPage from "../component/course/CourseDetailsPage";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { drugId } = router.query;

  return (
    <div>
      <h1>ProductPage</h1>
      {/* <CourseDetailsPage id={courseId} /> */}
    </div>
  );
}

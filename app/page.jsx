import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <div className="w-1/2 mx-auto flex justify-center flex-col items-center my-24">
          <h1 className="text-3xl font-bold">Welcome to Quizz App</h1>
          <Image
            src="/quiz.jpg"
            alt="quiz"
            width={400}
            height={300}
            className="my-5"
          />
          <Link href="/quizz">
            <Button>Start Quiz</Button>
          </Link>
        </div>
      </section>
    </>
  );
}

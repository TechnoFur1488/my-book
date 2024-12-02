import Image from "next/image"

export default {
  

    logo: <>
        <Image
            src="/images/Group 83.svg"
            alt="Логотип SyntaxSphere"
            width={47}
            height={31}
        />
        <span>SyntaxSphere</span>
    </>,

    project: {
        link: 'https://github.com/TechnoFur1488/my-book.git'
    },

    footer: {
        text: "© 2024 The SyntaxSphere Project."
    }
}
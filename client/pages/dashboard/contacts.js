import { useSession, getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'
import { Contacts } from '../../components/pages'
import { Protected } from '../../components/protected'

export default function ContactPage({ contacts, jobs }) {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/')
    }
  }, [session, loading])

  return <Contacts contacts={contacts} jobs={jobs} />
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const { userId } = session.user

  const res = await axios.get(
    `https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/${userId}/contacts`
  )

  const jobres = await axios.get(
    `https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/${userId}/jobs`
  )

  return {
    props: {
      user: userId,
      contacts: res.data.items,
      jobs: jobres.data.items,
    },
  }
}

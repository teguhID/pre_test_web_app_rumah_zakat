/* eslint-disable @next/next/no-img-element */
import CardProfile from '../../components/templates/CardProfile'
import HeaderProfile from '../../components/templates/HeaderProfile'
import DescProfile from '../../components/templates/DescProfile'

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-6 max-w-2xl w-full">
        <HeaderProfile 
          src="https://media-cgk1-1.cdn.whatsapp.net/v/t61.24694-24/347726889_234196222558046_7830155489640698447_n.jpg?ccb=11-4&oh=01_Q5Aa2gEyLGEHCIf_odJjisXQxF9z37yR6BmWPQvT_R1e8sd4AQ&oe=68CC000D&_nc_sid=5e03e0&_nc_cat=104"
          name="TEGUH WAHYU NUGROHO"
          role="SOFTWARE ENGINEER"
        />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <CardProfile label="Email" value="teguh.nugraha76@gmail.com" />
          <CardProfile label="Telepon" value="+62 896 8756 2012" />
        </div>

        <DescProfile value="Innovative and detail-oriented software developer with 4 years of experience in designing, developing, and implementing web, mobile, and computer vision applications. Skilled in creating scalable and robust software solutions that enhance user experience and streamline processes. Proven ability to work collaboratively in fast-paced environments to deliver high-quality products on time."/>

      </div>
    </div>
  );
}

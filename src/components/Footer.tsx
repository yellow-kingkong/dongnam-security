const TEL = '031-877-9112'

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* 회사 정보 */}
          <div>
            <p className="font-medium text-white/60">(주)동남시큐리티</p>
            <p className="mt-2 text-sm text-white/40">
              경기도 의정부시 청사로 5번길 8-17 센타프라자빌딩 204호
            </p>
            <p className="mt-1 text-sm text-white/40">
              사업자등록번호 127-86-04362 · 대표이사 김성남
            </p>
          </div>

          {/* 전화 CTA */}
          <div className="md:text-right">
            <a
              href={`tel:${TEL}`}
              className="text-xl font-bold text-gold transition-colors hover:text-gold-light"
            >
              {TEL}
            </a>
            <p className="mt-1 text-xs text-white/40">FAX 031-877-5112</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <p className="text-xs text-white/30">
            © 2025 (주)동남시큐리티. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

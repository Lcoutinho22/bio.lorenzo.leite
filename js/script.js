  document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: 0.1 });
            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

            document.getElementById('leadForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const phone = "5527997170215"; 
                const n = document.getElementById('nome').value;
                const o = document.getElementById('objetivo').value;
                const i = document.getElementById('idade').value;
                const b = document.getElementById('peso').value;
                const p = document.getElementById('planoSelecionado').value || "Geral";
                window.open(`https://wa.me/${phone}?text=Nome:${n}%0AIdade:${i}%0APeso:${b}%0AObjetivo:${o}%0APlano:${p}`, '_blank');
            });

            const themeBtn = document.getElementById('themeBtn');
            themeBtn.addEventListener('click', () => {
                const html = document.documentElement;
                const isLight = html.getAttribute('data-theme') === 'light';
                html.setAttribute('data-theme', isLight ? 'dark' : 'light');
                themeBtn.querySelector('i').classList.toggle('ph-sun', !isLight);
                themeBtn.querySelector('i').classList.toggle('ph-moon', isLight);
            });
        });

        function selectPlan(p) {
            document.getElementById('planoSelecionado').value = p;
            document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => document.getElementById('nome').focus(), 800);
        }
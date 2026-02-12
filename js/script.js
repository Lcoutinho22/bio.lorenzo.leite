  document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: 0.1 });
            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

            document.getElementById('leadForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const phone = "5521999999999"; 
                const n = document.getElementById('nome').value;
                const o = document.getElementById('objetivo').value;
                const p = document.getElementById('planoSelecionado').value || "Geral";
                window.open(`https://wa.me/${phone}?text=Nome:${n}%0AObjetivo:${o}%0APlano:${p}`, '_blank');
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
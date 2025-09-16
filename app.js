
        document.addEventListener('DOMContentLoaded', function() {
            // Referencias a formularios y mensajes
            const registerForm = document.getElementById('registerForm');
            const loginForm = document.getElementById('loginForm');
            const registerMessage = document.getElementById('registerMessage');
            const loginMessage = document.getElementById('loginMessage');
            const goToLogin = document.getElementById('goToLogin');
            const goToRegister = document.getElementById('goToRegister');
            
            // Validación del formulario de registro
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Obtener valores
                const fullname = document.getElementById('fullname').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                // Validaciones
                if (password.length < 6) {
                    showMessage(registerMessage, 'error', 'La contraseña debe tener al menos 6 caracteres');
                    return;
                }
                
                if (password !== confirmPassword) {
                    showMessage(registerMessage, 'error', 'Las contraseñas no coinciden');
                    return;
                }
                
                // Simular registro exitoso
                showMessage(registerMessage, 'success', `Usuario ${fullname} registrado correctamente.`);
                
                // Limpiar formulario
                registerForm.reset();
            });
            
            // Validación del formulario de login
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Obtener valores
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                
                // Simular credenciales (en una app real esto se haría contra una base de datos)
                if (password.length < 6) {
                    showMessage(loginMessage, 'error', 'La contraseña debe tener al menos 6 caracteres');
                    return;
                }
                
                // Simular login exitoso
                showMessage(loginMessage, 'success', 'Inicio de sesión exitoso. Bienvenido!');
                
                // Limpiar formulario
                loginForm.reset();
            });
            
            // Funcionalidad para alternar entre formularios
            goToLogin.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.form-section:first-child').style.display = 'none';
                document.querySelector('.form-section:last-child').style.display = 'block';
            });
            
            goToRegister.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.form-section:first-child').style.display = 'block';
                document.querySelector('.form-section:last-child').style.display = 'none';
            });
            
            // Función para mostrar mensajes
            function showMessage(element, type, text) {
                element.textContent = text;
                element.className = 'message ' + type;
                element.style.display = 'block';
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(function() {
                    element.style.display = 'none';
                }, 5000);
            }
        });
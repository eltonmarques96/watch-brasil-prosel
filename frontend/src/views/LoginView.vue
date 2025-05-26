<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <Card class="w-full max-w-md p-8 shadow-lg">
      <CardHeader>
        <h2 class="text-2xl font-bold text-center mb-2">Login</h2>
        <p class="text-sm text-gray-500 text-center mb-4">Entre com suas credenciais</p>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="onSubmit" class="space-y-4">
          <Form label="Email" :error="errors.email">
            <Input
              v-model="form.email"
              type="email"
              placeholder="seu@email.com"
              autocomplete="username"
              required
            />
          </Form>
          <Form label="Senha" :error="errors.password">
            <Input
              v-model="form.password"
              type="password"
              placeholder="Sua senha"
              autocomplete="current-password"
              required
            />
          </Form>
          <Button type="submit" class="w-full" :loading="loading"> Entrar </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardHeader, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import Input from '../components/ui/input/'

const form = ref({
  email: '',
  password: '',
})

const errors = ref({
  email: '',
  password: '',
})

const loading = ref(false)

function onSubmit() {
  errors.value = { email: '', password: '' }
  loading.value = true

  // Simulação de validação simples
  if (!form.value.email) {
    errors.value.email = 'Email é obrigatório'
  }
  if (!form.value.password) {
    errors.value.password = 'Senha é obrigatória'
  }

  if (errors.value.email || errors.value.password) {
    loading.value = false
    return
  }

  // Aqui você pode adicionar a lógica de autenticação
  setTimeout(() => {
    loading.value = false
    alert('Login realizado!')
  }, 1000)
}
</script>
